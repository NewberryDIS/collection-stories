import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

const text =
  "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
const urll = (pic: string) =>
  `https://collections.newberry.org/IIIF3/Image/${pic.image}/full/,300/0/default.jpg`;

export default component$(() => {
  return (
    <article
      class={css({
        display: "flex",
        fontSize: 30,

        "& .hero": {
          padding: 10,
          flex: 1,
          border: "1px solid black",
          alignSelf: "flex-start",
          position: "sticky",
          top: "10vh",
        },
        "& .content": {
          padding: 10,
          flex: 2,
          border: "1px solid black",
        },
      })}
    >
      <p class="hero">asdf</p>
      <section class="content">
        <p>
          Elit nostrum facere delectus esse velit quo Quasi unde nesciunt
          suscipit autem quam Dolore impedit quibusdam tempore molestiae
          deserunt. Explicabo dignissimos atque cum laborum beatae? Quasi itaque
          vel doloremque cumque
        </p>
        <p>
          Sit amet deleniti excepturi hic ullam modi, laboriosam. Cum fugit cum
          tempora dolorem quo Voluptatem dolores ipsum ad sunt necessitatibus
          dolorem. Ipsam reiciendis nostrum deserunt harum omnis id! Molestiae
          blanditiis
        </p>
        <p>
          Elit fuga eius accusantium quis minima? Odit ea esse nisi quasi
          mollitia Ea necessitatibus ullam adipisci quasi accusamus culpa Dolor
          ea veniam inventore lorem alias tempore Commodi ea quae
          necessitatibus?
        </p>
        <p>
          Ipsum in eum fugiat iure sequi. Blanditiis voluptatibus sunt suscipit
          ea minima, incidunt corporis id Eius quod praesentium eius dignissimos
          deleniti dolores Doloribus sapiente incidunt ipsa accusantium iure
          eos. Reprehenderit!
        </p>
        <p>
          Sit esse excepturi odio iusto officia Consectetur obcaecati officiis
          vel quod nihil ad labore? Temporibus id fuga totam necessitatibus
          obcaecati officiis Labore dolorum placeat nostrum qui odio! Eum unde
          rerum.
        </p>
        <p>
          Elit fugiat aperiam iure aliquid quia natus, perspiciatis? Cum quaerat
          maxime error qui culpa? Iste magni sequi dicta optio culpa Ea
          excepturi quis vel expedita illo eligendi Sequi eos unde?
        </p>
        <p>
          Ipsum fugiat fugit eos vero maiores quod! Est ullam repudiandae
          dolores laudantium illum similique Minima minima soluta quos esse
          saepe! Culpa minima sunt officiis quibusdam excepturi molestias?
          Dolorum animi aperiam
        </p>
        <p>
          Sit saepe fugiat molestiae minus aliquam Id nemo dolor cupiditate
          quasi dolor Unde accusantium dolorem culpa quibusdam harum Veritatis
          officiis eius corporis obcaecati iste. Optio corrupti quasi facilis
          facere dignissimos!
        </p>
        <p>
          Sit id dolorem esse sequi culpa! Similique modi dolorem officia totam
          magnam! Odit provident cupiditate recusandae adipisci debitis Soluta
          repellat sunt ab quibusdam esse Excepturi asperiores odit veritatis ab
          deserunt
        </p>
        <p>
          Consectetur repudiandae voluptatum veniam hic dolor? Impedit quidem
          alias consequatur animi nulla. Laborum repellat vitae nesciunt esse
          deleniti nostrum? Incidunt eligendi quo minima consequuntur debitis
          Reiciendis dolores maxime libero neque
        </p>
      </section>
    </article>
  );
});
