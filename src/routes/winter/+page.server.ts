import { getCortexData, winterCards } from "$lib";
import { CORTEX_API_KEY } from "$env/static/private";

const mei = "2KXJ8ZS43VB4Y";
const getNewData = false;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  if (getNewData) {
    return {
      cards: await getCortexData(mei, CORTEX_API_KEY),
    };
  } else {
    return { cards: winterCards };
  }
}
