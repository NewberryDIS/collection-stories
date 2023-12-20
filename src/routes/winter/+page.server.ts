import { getCortexData } from '$lib'
import { CORTEX_API_KEY } from '$env/static/private';

const mei = "2KXJ8ZS43VB4Y"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		cards: await getCortexData(mei, CORTEX_API_KEY)
	};
}
