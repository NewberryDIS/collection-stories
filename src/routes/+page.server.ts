import { getTumblrData } from '$lib'
import { TUMBLR_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		cards: await getTumblrData(TUMBLR_API_KEY)
	};
}
