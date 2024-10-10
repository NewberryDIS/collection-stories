import { writable } from 'svelte/store';
import type { CortexData, Post, MiniPost } from './types';
// @ts-ignore
import tumblr from 'tumblr.js';

export const blogPostData = writable('');

function decodeHtmlEntities(str) {
  // Create a regular expression to match HTML entities
  const entityRegex = /&([a-z0-9]+|#[0-9]+|#x[0-9a-f]+);/gi;

  // Replace each entity with its corresponding character
  return str.replace(entityRegex, (match, entity) => {
    // Check for numeric entities
    if (entity.startsWith('#')) {
      const charCode = parseInt(entity.slice(1), entity.startsWith('#x') ? 16 : 10);
      return String.fromCharCode(charCode);
    } else {
      // Look up named entities in a map
      const entityMap = {
        // lsquo: '\u2018', // Left single quotation mark
        // rsquo: '\u2019', // Right single quotation mark
        // Add more entities as needed:
        '&lt;': '<',
        'lt': ' < ',
        '&gt;': '>',
        ' gt ': ' > ',
        '&amp;': '&',
        'amp': '&',
        '&hellip;': '...',
        'hellip': '...',
        '&lsquo;': '\u2018',
        'lsquo': '\u2018',
        '&rsquo;': '\u2019',
        'rsquo': '\u2019',
        '&ldquo;': '\u201C',
        'ldquo': '\u201C',
        '&rdquo;': '\u201D',
        'rdquo': '\u201D'
        // etc.
      };
      return entityMap[entity] || entity; // Return decoded character or original entity if not found
    }
  });
}

export function truncateStringAtWordBoundary(str, maxLength = 50) {
  // Preprocess the string to decode HTML entities
  str = decodeHtmlEntities(str);

  if (str.length <= maxLength) {
    // String is already within the limit, return it as is
    return str;
  }

  const lastIndex = Math.min(str.length, maxLength);
  // Find the last space within the allowed length
  const lastSpaceIndex = str.lastIndexOf(' ', lastIndex);

  if (lastSpaceIndex !== -1) {
    // Truncate at the found space
    str = str.slice(0, lastSpaceIndex);
  } else {
    // No space found within the limit, truncate at the maxLength
    str = str.slice(0, maxLength);
  }

  // Check for trailing comma or exclamation mark and remove if necessary
  const finalChar = str[str.length - 1];
  if ([',', '!', ':', '*', '?', '+'].includes(finalChar)) {
    // str.endsWith(',') || str.endsWith('!')) {
    str = str.slice(0, -1);
  }

  return str + '...'; // Add ellipsis
}

// the PackageExtractor api url; at some point the API will be fixed (allegedly)
// and we will be able to add the representative MEI into the Content fields, eliminating most of these api calls
const peUrl = [
  'https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=',
  '&PackageFields=SystemIdentifier,Title,new.Context,Link,new.Link-2&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json'
];

export async function getTumblrData(post: string, tumblrApiKey: string) {
  // commenting out all tag-related complexities; urlTag should be a parameter
  // console.log("urlTag", urlTag)
  // let tags: string[][] = []
  const client = tumblr.createClient({
    consumer_key: tumblrApiKey
  });
  // const tagFilterList = urlTag ? ['collection stories', urlTag] :  ['collection stories']
  // console.log("tagFilterList",tagFilterList)
  // const response = await client.blogPosts("digitalnewberry.tumblr.com", { tag: tagFilterList });
  const response = await client.blogPosts('digitalnewberry.tumblr.com', {
    tag: ['collection stories']
  });

  let posts: Post[] = response.posts;

  posts = posts.filter((p) => p.trail[0].blog.name === 'digitalnewberry');

  // let allp = posts
  // if (urlTag){
  //   const allResponse = await client.blogPosts("digitalnewberry.tumblr.com", { tag: ['collection stories']  });
  //   let allPosts: Post[] = allResponse.posts;
  //
  //   allPosts = allPosts.filter((p: Post) => p.trail[0].blog.name === "digitalnewberry");
  //   allPosts.forEach((p) => {
  //     tags.push(p.tags)
  //   })
  // }

  const miniPosts: MiniPost[] = posts.map((p) => {
    const htmlBlock = p.body;

    const h1Match = htmlBlock.match(/<h1>(.*?)<\/h1>/);
    const h1Value = h1Match ? h1Match[1].replace(/<\/?[^>]+(>|$)/g, '') : 'null';

    const imgMatch = htmlBlock.match(/<img[^>]*?src=['"](.*?)['"]/);
    const imgSrc = imgMatch ? imgMatch[1] : '';
    // const
    // urlTag || tags.push(p.tags)

    return {
      title: h1Value as string,
      image: imgSrc,
      url: p.slug,
      tumblrurl: p.short_url,
      body: p.body,
      tags: p.tags,
      p: p
    };
  });
  // console.log(posts)
  // const uniqTags = [...new Set(tags.flat())].sort(( a, b ) => a > b ? 1 : -1).filter(f => !tagBlacklist.includes(f))

  // tags.forEach(tagList => {
  //   tagList.forEach(tag => {
  //       uniqTags[tag]++;
  //   });
  // });

  return miniPosts;
  // don't forget to import the TumblrProcessedApiData type
  // return { posts: miniPosts, tags: uniqTags, allp: allp } as TumblrProcessedApiData;
}

async function cortexApiCall(mei: string, cortexApiToken: string) {
  const dataUrl = peUrl[0] + mei + peUrl[1] + '&token=' + cortexApiToken;
  // console.log(dataUrl);
  const response = await fetch(dataUrl).then((r) => r.json());
  return response as CortexData;
}

export async function getCortexData(mei: string, cortexApiToken: string) {
  const topLevelData = await cortexApiCall(mei, cortexApiToken);
  const cardResponse = await Promise.all(
    topLevelData.APIResponse.Content.map((item) =>
      cortexApiCall(item.MediaEncryptedIdentifier, cortexApiToken)
    )
  );
  // console.log(JSON.stringify(cardResponse, null, 3));
  const cardData = cardResponse
    .filter((f) => f.APIResponse.Content.length > 0)
    .map((res) => ({
      image: {
        width: parseInt(res.APIResponse.Representative.MaxWidth),
        height: parseInt(res.APIResponse.Representative.MaxHeight),
        ctxid: res.APIResponse.Representative.MediaEncryptedIdentifier,
        altfn:
          res.APIResponse.Representative.MediaEncryptedIdentifier === '2KXJ8ZS43VD50'
            ? '/winter-postcards.webp'
            : res.APIResponse.Representative.MediaEncryptedIdentifier === '2KXJ8ZS4YR7VZ'
              ? '/artists-holiday-postcards.gif'
              : ''
      },
      title: res.APIResponse.Title,
      blurb: res.APIResponse['new.Context'],
      view: res.APIResponse.Link,
      about: urlParser(res.APIResponse['new.Link-2']),
      iiiftype: res.APIResponse.Content[0]['CoreField.IIIFResourceType']
    }));

  // console.log(JSON.stringify(cardData, null, 3));
  // console.log(JSON.stringify(cardData.map((c) => ({ title: c.title }))));

  return cardData;
  // return [cardData, peUrl[0] + mei + peUrl[1] + "&token=" + cortexApiToken];
  // return [cardData, cardResponse];
}

function urlParser(value: string) {
  const urlRegex = /href="([^"]*)"/;
  const match = value.match(urlRegex);
  if (match && match[1]) {
    return match[1];
  } else {
    return '[grayed out for now]';
  }
}

export const sourceButtonData = {
  transc: {
    img: 'wintry-mini.webp',
    text: [
      'The frigid background image is',
      'Elmer Jacobs Christmas card, mid-20th c.',
      "The snowy ghost is named Enzo. If you haven't found him yet, keep looking!"
    ],
    url: 'https://collections.newberry.org/asset-management/2KXJ8ZS4WVG4K'
  },
  winter: {
    img: 'wintry-mini.webp',
    text: [
      'The frigid background image is',
      'Elmer Jacobs Christmas card, mid-20th c.',
      "The snowy ghost is named Enzo. If you haven't found him yet, keep looking!"
    ],
    url: 'https://collections.newberry.org/asset-management/2KXJ8ZS4WVG4K'
  },
  halloween: {
    img: 'ghostyboy-mini.webp',
    text: [
      'The spooky background image is the',
      'Newberry Library, Chicago, 1975.',
      'The terrifying ghost is Enzo.'
    ],
    url: 'https://collections.newberry.org/asset-management/2KXJ8Z3DGL97?WS=AssetManagement'
  }
};

export const tagBlacklist = [
  'archives',
  'collection stories',
  'digital humanities',
  'libraries',
  'newberry library',
  'newberryd',
  'newberryj',
  'newberryq',
  'special collections',
  'vintage',
  'youtube'
];

export const hallodata = [
  {
    image: {
      width: 617,
      height: 400,
      ctxid: '2KXGDNLS0NM',
      altfn: '/halloween-slideshow.webp'
    },
    title: 'Halloween postcards, ca. 1910s',
    blurb:
      'Send e-greetings with vintage Halloween images from our collections! Treat a friend with digitized witches, ghosts, and clowns at Newberry Postcard Sender.',
    view: 'https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45P1L0W&SMLS=1&RW=1280&RH=603#/DamView&VBID=2KXJA45P1T3R&PN=1&WS=SearchResults ',
    about:
      'https://www.tumblr.com/digitalnewberry/730081438520705024/vintage-halloween-postcards?source=share'
  },
  {
    image: {
      width: 234,
      height: 400,
      ctxid: '2KXJ8ZQ50KYQ'
    },
    title: 'Book of magical charms, ca. 1612',
    blurb:
      'This 17th-century book of magical charms is the ultimate self-help guide, covering everything from speaking with "spiritts" to curing a toothache.',
    view: 'https://collections.newberry.org/asset-management/2KXJ8Z9UGC2Q?BRPN=5',
    about:
      'https://www.tumblr.com/digitalnewberry/731458343803158528/the-book-of-magical-charms?source=share&ref=_tumblr'
  },
  {
    image: {
      width: 641,
      height: 400,
      ctxid: '2KXJ8ZS86HE6V',
      altfn: '/coloringbookpage.webp'
    },
    title: 'Color Our Collections: Newberry Halloween',
    blurb:
      "Inspired by the <a href='https://library.nyam.org/colorourcollections/' target='_blank' class='llines'>online #ColorOurCollections festival</a>, a special Halloween coloring book based on our vintage postcards. Get a peek into old Halloween traditions with these pages fun for kids and adults alike!",
    view: 'https://collections.newberry.org/asset-management/2KXJ8ZS86HE6V',
    about:
      'https://www.tumblr.com/digitalnewberry/731535388653617152/cozy-up-with-our-vintage-halloween-coloring?source=share&ref=_tumblr'
  },
  {
    image: {
      width: 263,
      height: 400,
      ctxid: '2KXJ8ZS86HYCV',
      altfn: '/halloween-costumes.webp'
    },

    title: 'Costume ideas',
    blurb:
      'Find this year’s costume in images from the postcard golden age (1890s-1920s). Fantastical scenes, elaborate sports outfits, and period clothing provide plenty of ideas for your Halloween party.',
    view: 'https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4P71SAO&SMLS=1&RW=1920&RH=963#/DamView&VBID=2KXJA4P71UOW&PN=1&WS=AssetManagement',
    about:
      'https://www.tumblr.com/digitalnewberry/730804233777135616/with-halloween-just-a-few-short-weeks-away-you?source=share'
  },
  {
    image: { width: 327, height: 400, ctxid: '2KXJ8ZSVNXL1T' },
    title: 'Modern manuscripts, 1890s-1940s',
    blurb:
      '"It isn’t natural to us to frisk" at the Halloween party? Explore how 20th century people celebrated and spoke about Halloween with our modern manuscripts.',
    view: 'https://collections.newberry.org/Share/3ebdn80fysljic8218hdcpkq3pt233s8',
    about:
      'https://www.tumblr.com/digitalnewberry/730081464400658432/turn-of-the-century-halloween?source=share'
  },
  {
    image: { width: 260, height: 400, ctxid: '2KXJ8ZSU09S1F' },
    title: 'Early modern ghosts, 1660-1705',
    blurb:
      'English broadsides featuring ghostly offerings of warnings, advice, and denunciations in verse form.',
    view: 'https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA45TD1YF&SMLS=1&RW=1280&RH=603#/DamView&VBID=2KXJA45TDYBZ&PN=1&WS=SearchResults',
    about: 'https://digitalnewberry.tumblr.com/post/763879134412849152/spiritual-counsel'
  },
  {
    image: { width: 600, height: 400, ctxid: '2KXJ8ZSJ9Q7PB' },
    title: 'WWI skeletons, mid- to late-1910s',
    blurb:
      'Anti-German propaganda depicting the horrors of war (plus a few post-war fishing trips).',
    view: 'https://collections.newberry.org/asset-management?WS=AssetManagement#/DamView&VBID=2KXJA4P67MOS&PN=1&WS=AssetManagement',
    about:
      'https://www.tumblr.com/digitalnewberry/730998690665381889/on-this-day-in-1915-british-nurse-edith-cavell?source=share&ref=_tumblr'
  },
  {
    image: { width: 267, height: 400, ctxid: '2KXJ8ZS6Z99FF' },
    title: 'Assorted demons, early to mid-20th c.',
    blurb: 'For all your soul-selling, cake-walking, and golfing needs',
    view: 'https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA47YW7LYP&SMLS=1&RW=1920&RH=953#/DamView&VBID=2KXJA47YW7BWI&PN=1&WS=SearchResults',
    about: 'https://digitalnewberry.tumblr.com/post/732191582402543617/no-one-told-me-in-library-school-that-my-work'
  },
  {
    image: {
      width: 600,
      height: 400,
      ctxid: '2KXJ8ZSMLTJHC',
      altfn: '/autumn.webp'
    },
    title: 'Bonus: Happy Autumn',
    blurb: "It's always peak fall foliage in the Newberry's postcard collections.",
    view: 'https://collections.newberry.org/asset-management?WS=AssetManagement#/DamView&VBID=2KXJA4P6H3VT&PN=1&WS=AssetManagement',
    about: 'https://digitalnewberry.tumblr.com/post/731981905024647168/leaves-are-falling-in-our-themed-set-of-autumn'
  }
];
