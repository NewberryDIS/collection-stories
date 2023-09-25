import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

const imgUrl = (pic: string) =>
  `https://collections.newberry.org/IIIF3/Image/${pic}/full/,300/0/default.jpg`;

type HeroImage = {
  image: string;
  title: string;
  width: number;
  height: number;
};

export interface ArticleProps {
  heroImage: HeroImage;
  // contentText: string[];
}

export const Article = component$<ArticleProps>((props) => {
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
      <div class="hero">
        <img
          src={imgUrl(props.heroImage.image)}
          width={props.heroImage.width}
          height={props.heroImage.height}
          alt=""
        />
      </div>
      <div class="content">
        <div>
          Elit dignissimos enim aspernatur cumque aut Omnis porro libero alias
          blanditiis minus fuga. Natus officia iure iure eos consequatur laborum
          Aperiam error nisi dolorum veritatis itaque sequi! Dignissimos
          incidunt neque
        </div>
        <div>
          Dolor id quo ut ad nisi. Elit consequuntur quae ducimus facere dolore.
          Sit mollitia veniam est nostrum enim ipsa Recusandae doloribus officia
          fugit deleniti aperiam Adipisci quasi soluta quos eius
        </div>
        <div>
          Dolor minima itaque non nobis architecto. Sed sequi veritatis
          laboriosam hic quia, autem? Quos molestias veniam eveniet ipsa iure
          nemo. Temporibus sequi error expedita cum magni, maiores Ex laboriosam
          aliquam?
        </div>
        <div>
          Dolor vel alias totam quia quas Non facilis quasi pariatur aliquid
          nihil Officia unde deleniti recusandae fugiat accusantium nobis
          Veritatis quas repellendus exercitationem blanditiis sapiente Neque
          officia quia et excepturi
        </div>
        <div>
          Amet totam iusto consequatur ipsam fuga vero illum? Aut hic tempora
          eaque aliquid deserunt delectus Ipsam fugiat ab maiores odio maxime
          molestias Provident voluptates soluta tempora quisquam laboriosam?
          Officia minima.
        </div>
        <div>
          Adipisicing adipisicing possimus perferendis minima dolor, quos!
          Asperiores excepturi quidem cumque molestiae nesciunt? Doloremque
          laborum error animi esse praesentium. Tenetur rerum repellat et facere
          vitae, obcaecati Cumque a maxime eius.
        </div>
        <div>
          Elit velit asperiores laborum odit amet Adipisci unde necessitatibus
          deleniti temporibus ullam qui pariatur A magni fuga rem quisquam
          officiis Quas illum culpa nostrum nostrum alias Voluptate iste non
          impedit?
        </div>
        <div>
          Elit quasi placeat quia facilis quia Molestiae officiis dolorum
          eveniet porro quasi sunt amet. Nulla totam sunt alias totam accusamus
          harum. Voluptates quasi voluptatem sunt odit placeat eos quas saepe?
        </div>
        <div>
          Adipisicing dicta vitae adipisicing delectus nam quae Ea sint nam
          aliquid consequuntur atque consequatur excepturi quo? Soluta earum
          debitis explicabo unde velit Perspiciatis cumque reprehenderit sequi
          officia accusantium Vero voluptas
        </div>
        <div>
          Dolor deleniti eos omnis beatae quidem? Enim ipsam accusantium
          voluptas iste quibusdam. Obcaecati sequi blanditiis quas minima odit
          Commodi consequuntur delectus repellendus impedit amet Similique
          aliquid doloremque distinctio quod blanditiis
        </div>
        <div>
          Lorem perspiciatis molestiae maiores molestiae explicabo Excepturi ex
          nulla distinctio dolor voluptate? Reprehenderit veritatis corporis
          fuga omnis modi? Iusto odio facilis at cumque ducimus? Natus rem iste
          adipisci earum ratione
        </div>
        <div>
          Sit dolorum enim dignissimos numquam illum. Veniam atque repellat
          explicabo molestias quia! Quos error quasi odio ut sed Ex pariatur
          necessitatibus cumque saepe repellendus Dolorum dolores excepturi
          commodi dolorem voluptate!
        </div>
        <div>
          Lorem repudiandae quibusdam tempore voluptas ducimus. Asperiores
          dignissimos voluptatibus explicabo est quidem Praesentium tempora
          maxime odit doloremque nisi! Nesciunt nesciunt harum aliquam eveniet
          ipsam? Animi reprehenderit quibusdam porro dolore corrupti.
        </div>
        <div>
          Amet dolor ab doloribus ipsa facere, dolores Accusamus doloremque
          repellat repudiandae tenetur vitae? Itaque voluptatibus magnam quaerat
          numquam repellendus Doloribus praesentium blanditiis recusandae
          officiis illum. Veritatis debitis praesentium commodi similique?
        </div>
        <div>
          Ipsum eum accusamus et pariatur consequatur nobis dolorem. Voluptatum
          natus dolor delectus quos modi. Eveniet eius vero exercitationem vero
          totam impedit, ratione. Nemo sed id perspiciatis nulla adipisci Nam
          non!
        </div>
      </div>
    </article>
  );
});
