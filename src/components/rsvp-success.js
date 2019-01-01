import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export const Failure = props => (
  <Layout title="Uh oh!" location={props.location}>
    <article id="failure">
      <section>
        <p>
          Oh no - something has gone a bit squiffy with the form. We're sorry to
          have to ask, but please can you try again later? It might be worth
          double checking your connection.
        </p>
        <p>
          If it happens again please let us know directly and we'll get it fixed
          up.
        </p>
      </section>
    </article>
  </Layout>
);

export const Success = props => (
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
          disregard what Google Maps optimistically says and give yourself about
          three hours for the trip.
        </p>
      </section>
    </article>
  </Layout>
);
