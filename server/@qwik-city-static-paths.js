const staticPaths = new Set(["/collection-stories/NewberryDCLogo.svg","/collection-stories/Newberryzo.svg","/collection-stories/autumn.webp","/collection-stories/coloringbookpage.png","/collection-stories/coloringbookpage.webp","/collection-stories/fonts/FlechaM-Black.woff","/collection-stories/fonts/FlechaM-Bold.woff","/collection-stories/fonts/FlechaM-Regular.woff","/collection-stories/fonts/StyreneB-Bold-Web.woff","/collection-stories/fonts/StyreneB-Regular-Web.woff","/collection-stories/fonts/signifier-bold.woff2","/collection-stories/fonts/signifier-regular.woff2","/collection-stories/ghosty.gif","/collection-stories/ghostyboy.png","/collection-stories/ghostyboy.webp","/collection-stories/halloween-costumes.gif","/collection-stories/halloween-costumes.webp","/collection-stories/halloween-slideshow.gif","/collection-stories/halloween-slideshow.webp","/collection-stories/halloween/","/collection-stories/manifest.json","/collection-stories/newberry.png","/collection-stories/q-manifest.json","/collection-stories/robots.txt","/collection-stories/service-worker.js","/collection-stories/sitemap.xml","/collection-stories/snow/winter-bg-snowflakes-1.png","/collection-stories/snow/winter-bg-snowflakes-2.png","/collection-stories/snow/winter-bg-snowflakes-3.png","/collection-stories/snow/winter-bg-snowflakes-4.png","/collection-stories/snow/winter-bg-snowflakes-5.png","/collection-stories/snow/winter-bg-snowflakes-6.png","/collection-stories/spooky.gif","/collection-stories/spookynewberry-cropped-50.jpg","/collection-stories/spookynewberry-cropped-overlay.jpg","/collection-stories/spookynewberry-cropped.png","/collection-stories/spookyshlflibrary.png","/collection-stories/winter-postcards.gif","/collection-stories/winter-postcards.mp4","/collection-stories/winter-postcards.webp","/collection-stories/winter/","/collection-stories/wintrynewberry.png","/collection-stories/wwinter-postcards.webp"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/collection-stories/build/")) {
    return true;
  }
  if (p.startsWith("/collection-stories/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };