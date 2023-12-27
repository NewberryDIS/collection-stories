import { getTumblrData } from '$lib'
import { TUMBLR_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
	const post = params.post
	return {
		cards: await getTumblrData(post, TUMBLR_API_KEY)
	};
}
