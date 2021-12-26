import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default props => (
  <Layout title="FAQ" location={props.location}>
    <article id="FAQ">
      <section>
        <h3 style={{ textAlign: "center" }}>
          Are children invited to the wedding?
        </h3>
        <p>
          While we love spending time with your littles, the venue is beautiful
          but not kid-friendly. If you will have an infant that you need to keep
          near you, let us know as soon you can and we'll look into whether we
          can arrange a nursing room. Otherwise, the Cape loves families and
          there are professional sitter services locally for Saturday night if
          you'd still like to bring the whole family out for the long weekend.
        </p>
        <h3>How do I get to Cape Cod?</h3>
        <p>
          You start by booking a flight into Boston's Logan International
          Airport. From there, you can either rent a car and drive straight to
          the Cape (about 90 min) OR get the Plymouth &amp; Brockton bus from
          the airport to Hyannis or Barnstable and request a ride from there
          (Uber and Lyft do exist on the Cape, just not in massive quantities).
          The Langsen family has taken a lot of those buses over the years and
          this is a good option if you're coordinating with a larger group with
          a car arriving at a different time. There's more on travel (from both
          the US and UK) over here, too.
        </p>
        <h3>Where should we stay?</h3>
        <p>
          That's SUCH a good question that{" "}
          <Link to="/KansasCity">we made a special section for it</Link>. The short
          answer? You've got options. The wedding is at Wychmere Beach Club so
          center your searches around Harwich, Dennis, Chatham, Brewster and
          Orleans.
        </p>
        <h3>How do I get to the wedding?</h3>
        <p>
          There is parking at the venue if you'd like to drive, otherwise an
          Uber or taxi will do the trick. If you're staying in Harwichport, you
          may even be able to walk as it's very close to Main St!
        </p>
        <h3>What's the vibe?</h3>
        <p>
          Jessi's very glad you asked: English Garden on Cape Cod. That doesn't
          actually mean much for you though, so wear what you're comfortable in
          and consider it beach smart. Martin and his groomsmen will be in navy
          suits, bridesmaids will be in whatever floral thing they like best and
          Jessi's in white. Hats and fascinators are encouraged because Jessi
          absolutely loves them.
        </p>
        <h3>Is anything going on the rest of the weekend?</h3>
        <p>
          Friday night we'll be at Swan River in Dennisport for welcome drinks
          from 8pm after the rehearsal and BOY WILL WE BE HAPPY TO SEE YOU!
          Sunday after the wedding, we'll pick a beach and set up shop with
          coffee and several boxes of donuts and muffins from the Hole in One.
          We'll confirm this one closer in but as with Friday, everybody's
          welcome. Martin also has a hunch the next Avengers movie will be
          coming out at this time, so a discreet cinema trip may be planned...
        </p>
        <h3>What's the weather going to be like?</h3>
        <p>
          New England, much like Olde England, could do almost anything in May.
          It could be a gentle rain over a cool, moody bay. It could be summer
          sun and blue skies. Layers are encouraged, we promise it's beautiful
          either way and we chose the venue because it's beautiful no matter the
          weather.
        </p>
        <h3>What should I eat?</h3>
        <p>
          If I could make you a BINGO card, I would.{" "}
          <Link to="/KansasCity">Some Langsen favorites include</Link> Arnolds or
          PJ's for the best beachy junk food fix, Sundae School or the Chocolate
          Sparrow for an ice cream cone, Blackfish or Viera for a nice dinner
          out, the Red Inn for dinner and the Governor Bradford for drag queen
          karaoke in Provincetown.
        </p>
        <h3>When we're not at the wedding, what should we do?</h3>
        <p>
          Rent bikes and take on the beautiful, forested Cape Cod rail trail,
          take the ferry to Nantucket or Martha's Vineyard, check out the shops
          in Chatham or the galleries in Wellfleet, visit the National Seashore
          for a walk along some of the world's most beautiful beaches, go whale
          watching out of Provincetown and treat yourself to a walk down
          Commercial Street afterward. Cape Cod's little towns are so sweet and
          full of independent shops and artists--we cannot wait to share this
          very special place with each of you.
        </p>
      </section>
    </article>
  </Layout>
);
