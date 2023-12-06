import { component$ } from "@builder.io/qwik";

// import Snowflake1 from "~/media/snow/winter-bg-snowflakes-1.png?jsx";
// import Snowflake2 from "~/media/snow/winter-bg-snowflakes-2.png?jsx";
// import Snowflake3 from "~/media/snow/winter-bg-snowflakes-3.png?jsx";
// import Snowflake4 from "~/media/snow/winter-bg-snowflakes-4.png?jsx";
// import Snowflake5 from "~/media/snow/winter-bg-snowflakes-5.png?jsx";
// import Snowflake6 from "~/media/snow/winter-bg-snowflakes-6.png?jsx";
//
export interface SnowflakeProps {
  idx: number;
}
// const sizes = [
//   46, 2, 15, 21, 9, 44, 5, 15, 38, 37, 27, 4, 44, 3, 8, 23, 28, 49, 45, 35, 36,
//   36, 45, 8, 21, 18, 49, 16, 50, 45, 43, 1, 3, 11, 33, 28, 22, 3, 7, 23, 9, 37,
//   8, 31, 31, 8, 49, 19, 49, 45, 5, 18, 33, 31, 22, 28, 10, 28, 28, 1, 14, 14,
//   47, 7, 26, 50, 46, 35, 7, 22, 3, 44, 47, 7, 11, 34, 15, 33, 27, 23, 30, 36,
//   23, 4, 36, 32, 10, 28, 20, 24, 32, 22, 13, 9, 45, 3, 45, 15, 22, 6, 8, 33, 22,
//   5, 1, 32, 39, 12, 15, 4, 12, 19, 28, 7, 12, 29, 28, 27, 18, 45, 30, 22, 40, 2,
//   4, 9, 19, 18, 23, 31, 24, 49, 10, 43, 25, 20, 16, 40, 4, 42, 35, 8, 20, 35, 9,
//   22, 3, 21, 13, 29, 30, 28, 32, 21, 24, 19, 43, 29, 1, 50, 34, 46, 12, 22, 34,
//   11, 29, 38, 46, 11, 8, 48, 43, 16, 13, 2, 25, 7, 6, 12, 49, 27, 41, 41, 29, 7,
//   20, 48, 38, 8, 27, 45, 0, 21, 7, 23, 34, 24, 23, 28,
// ];
export const Snowflake = component$<SnowflakeProps>(({ idx }) => {
  // const snowflakes = [
  //   <Snowflake1 width={`"${sizes[idx]}"`} height={`"${sizes[idx]}"`} />,
  //   <Snowflake2 width={`"${sizes[idx]}"`} height={`"${sizes[idx]}"`} />,
  //   <Snowflake3 width={`"${sizes[idx]}"`} height={`"${sizes[idx]}"`} />,
  //   <Snowflake4 width={`"${sizes[idx]}"`} height={`"${sizes[idx]}"`} />,
  //   <Snowflake5 width={`"${sizes[idx]}"`} height={`"${sizes[idx]}"`} />,
  //   <Snowflake6 width={`"${sizes[idx]}"`} height={`"${sizes[idx]}"`} />,
  // ];
  // const snoid = (idx % 5) + 1;
  // return snowflakes[snoid];
  return <div>ok hey {idx}</div>;
});
