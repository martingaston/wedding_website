import React from "react";
import Layout from "../components/layout";

export default props => (
  <Layout title="404" location={props.location}>
    <article id="404">
      <section>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </article>
  </Layout>
);
