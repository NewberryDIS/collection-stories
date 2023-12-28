import { getTumblrData } from '$lib'
import { TUMBLR_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
	const post = params.post
	return {
		cards: await getTumblrData(post, TUMBLR_API_KEY)
	};
}
"I watched enough to get the message that Ono did NOT in fact break up the Beatles and also that Courtney Love didn't kill Kurt Cobain, but I never really thought either of those things happened and also I feel like there are enough human hours spent thinking about the Beatles without adding my hours to it.  Like, obviously the Beatles wrote good songs etc but is their preferential treatment in the history of music just Boomer-centrism?  And is the attachment of younger people (non-boomers) to bands like the Beatles and Led Zepplin and Bob Dylan the same kind of appeal to authority as the way the upper middle class pretends that "classical" music is better than all the other music?  Matched with some desire for validation from boomers in a kind of "pls notice me senpai" kind of way"
