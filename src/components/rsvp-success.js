import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default props => (
  <Layout title="Yay!" location={props.location}>
    <article id="success">
      <section>
        <p>
          Thanks for submitting your RSVP preferences. We can't wait to see you!
        </p>
        <p>
          If you've yet to make travel plans, you might want to look into that
          as soon as you can. It's a holiday weekend in the US, and the roads in
          Boston might be pretty hectic. You also deserve to stay in a really
          nice place - <Link to="/capecod">we've got some recommendations</Link>
          , and obviously just drop us a message if you'd like any help sorting
          your schedule.
        </p>
        <p>
          Also, if you'll be driving from Boston to Cape Cod we'd recommend you
          give yourself about three hours for the trip.
        </p>
      </section>
    </article>
  </Layout>
);
