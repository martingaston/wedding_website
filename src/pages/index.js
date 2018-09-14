import React from "react";
import Layout from "../components/layout";
import jam from "../images/intro.jpg";
import jammob from "../images/intro-mobile.jpg";

export default props => (
  <Layout title="Jessi &amp; Martin" location={props.location}>
    <picture>
      <source srcSet={jammob} media="(max-width: 600px)" />
      <source srcSet={jam} />
      <img className="photo" src={jam} alt="The day we met..." />
    </picture>
    <article id="story">
      <section>
        <hr />
        <h2>Previously...</h2>
        <hr />
        <p>
          She said it first in December, the two of them snuggled up in chunky
          knitwear and the moody lighting of an overpriced Berlin hotel. He had
          intended to say it but she beat him to it.
        </p>

        <p>
          They had met when she was brand new to London and he was drunk and
          talking about runner beans. He took her to places he thought were old
          and was afraid because he thought he might really like her, and she
          thought that was stupid so they started going out.
        </p>

        <p>
          In Berlin, the two of them would get caught in a stairwell wearing
          bathrobes and then attempt to explain that it wasn’t what it looked
          like. It really wasn’t. In the Jewish museum he would get sad teary at
          the memorial and then happy teary at the yarmulke adorned with the
          cast of Friends. They'd walk around a chintzy Christmas market
          designed to trap tourists, and then randomly stumble upon another one
          that looked like it was for locals. The glühwein would taste the same
          at both.
        </p>

        <p>
          He would convince her to move with him to South London a month later,
          but she would tell him that she worried about him living with her cat.
          She would later worry about how he'd react when they had to live
          without the cat. The cat, meanwhile, was extremely comfortable with
          having two humans who would now constantly do her bidding.
        </p>

        <p>
          Their tiny house became their home, one she filled with flowers, art
          and jazz and he filled with videogames, biscuits and cables. He hated
          trains and she loved to travel. She would walk around the park and
          become friends with every dog and cat in the area. They often worked
          late but always enjoyed cooking for each other in their tiny kitchen
          they both hated.
        </p>

        <p>
          Another six months later they would squabble in a Cape Cod boutique
          about the price of flip flops. She was right: he still wears them. He
          was right: he didn’t need them. They would both be lonely when the
          other was out of town.
        </p>

        <p>
          She phoned her parents every day. When she introduced him to her
          family he felt like he had known them for months. He begrudgingly
          visited home twice a year. When he introduced his family to her, she
          made him feel closer to the town he’d spent most of his life trying to
          avoid.
        </p>

        <p>
          They became aunties and uncles and would look at houses and make plans
          of their own, and then look at different houses and make different
          plans. It was always exciting thinking of what may happen in all their
          different houses as they lived out all their different plans.
        </p>

        <p>
          But all of that was still to come when she first said it in that
          overpriced Berlin hotel, though as they hugged silently in the moments
          after he knew it would always turn out like this.
        </p>

        <p>“I love you too,” he said.</p>
      </section>
    </article>
  </Layout>
);
