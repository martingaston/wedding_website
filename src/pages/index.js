import React from "react";
import Layout from "../components/layout";
import jam from "../images/WILLOUGHBY_0035_CROP.jpg";
import jammob from "../images/intro-mobile.jpg";

export default props => (
  <Layout title="Reece &amp; Jaime" location={props.location}>
    <picture>
      <source srcSet={jammob} media="(max-width: 600px)" />
      <source srcSet={jam} media="(max-width: 200px)"/>
      <img className="photo" src={jam} alt="The day we met..." />
    </picture>
    <article id="story">
      <section>
        <hr />
        <h2>We can't wait to celebrate with you!</h2>
        <hr />
        <p>
          Just a girl and a boy who met in San Antonio, TX, rescued a couple of dogs, 
          and have made Kansas City, MO their home.
        </p>

      </section>
    </article>
  </Layout>
);
