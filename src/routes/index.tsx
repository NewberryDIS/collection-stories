import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Article from "../components/Article/article";

const halloweenPostcards = [
  {
    title: "Goodness Dr. Owl, has the moon got jaundice!",
    image: "2KXJ8ZPZ1G4S",
    width: 3600,
    height: 2314,
  },
  {
    title: "May your Halloween always bring a good surprise",
    image: "2KXJ8ZPZ1X30",
    width: 3600,
    height: 2366,
  },
  {
    title: "If I might always hold the light..",
    image: "2KXJ8ZPZ1OGM",
    width: 2327,
    height: 3600,
  },
  {
    title: "May I be your Halloween beau?",
    image: "2KXJ8ZPZEN63",
    width: 2287,
    height: 3600,
  },
  {
    title: "Could I borrow a witches flying-machine...",
    image: "2KXJ8ZPZEIBJ",
    width: 3600,
    height: 2283,
  },
  {
    title: "Don't be scared on Halloween",
    image: "2KXJ8ZPZEW7C",
    width: 2351,
    height: 3600,
  },
  {
    title: "Excuse me if I seem in haste...",
    image: "2KXJ8ZPZEAC3",
    width: 2363,
    height: 3600,
  },
  {
    title: "You auto have a happy halloween",
    image: "2KXJ8ZOHZZVV",
    width: 2615,
    height: 3976,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2ZG5WJ",
    width: 2603,
    height: 3990,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QZ0PR",
    width: 3947,
    height: 2560,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QZ9LQ",
    width: 2569,
    height: 3908,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2Q1FMB",
    width: 3933,
    height: 2577,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2Q1P8O",
    width: 3924,
    height: 2570,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QGAI9",
    width: 3945,
    height: 2614,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QS4AD",
    width: 3959,
    height: 2613,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QSWY2",
    width: 3860,
    height: 2611,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QTTXX",
    width: 3927,
    height: 2620,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QT5H8",
    width: 3936,
    height: 2622,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QPMJ7",
    width: 3949,
    height: 2608,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QP6HU",
    width: 3942,
    height: 2602,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QN5T8",
    width: 2629,
    height: 3882,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2Q0V1R",
    width: 2583,
    height: 3925,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2Q00RR",
    width: 3966,
    height: 2591,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2Q0L7I",
    width: 3929,
    height: 2568,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZS2QBDU2",
    width: 3925,
    height: 2583,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZSUIW5_U",
    width: 3945,
    height: 2601,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZSUIW3_8",
    width: 3956,
    height: 2596,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZSUIXQ5B",
    width: 2583,
    height: 3958,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZSUIX58I",
    width: 3958,
    height: 2582,
  },
  {
    title: "John I. Monroe collection of general postcards",
    image: "2KXJ8ZSUIXB9W",
    width: 3965,
    height: 2595,
  },
];

export default component$(() => {
  console.log(halloweenPostcards[1]);
  return (
    <>
      <Article heroImage={halloweenPostcards[0]} />
      <Article heroImage={halloweenPostcards[1]} />
      <Article heroImage={halloweenPostcards[2]} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
