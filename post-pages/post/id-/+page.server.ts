import { getTumblrPost } from '$lib'
import { TUMBLR_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  const id = +params.id
  console.log("id", id)
	return {
		cards: await getTumblrPost(id, TUMBLR_API_KEY)
	};
}
