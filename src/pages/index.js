import React from "react";
import Layout from "../components/layout";
import jam from "../images/WILLOUGHBY_0035_CROP.jpg";
import jammob from "../images/intro-mobile.jpg";
import {StaticImage, GatsbyImage,getImage} from "gatsby-plugin-image";
import { graphql } from "gatsby";


export default props => (
  <Layout title="Reece &amp; Jaime" location={props.location}>
    <StaticImage src = "../images/WILLOUGHBY_0035_CROP.jpg" alt = "Jaime and Reece smiling" />
    
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

