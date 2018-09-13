import React from "react";
import Layout from "../components/layout";

import lobster from "../images/lobster.svg";
import rings from "../images/wedding-rings.svg";
import donut from "../images/donut.svg";

export default props => (
  <Layout title="Lineup" location={props.location}>
    <div className="one-column">
      <div>
        <img alt="Lobstah" src={lobster} />
        <h2>Welcome to Cape Cod Party</h2>
        <h4>Friday May 24, 2019</h4>
        <h4>8:00pm-11:00pm</h4>
        <h3>Swan River</h3>
        <h4>5 Lower County Rd, Dennis Port, MA 02639</h4>
        <h5>Casual</h5>
        <p>
          We'd love to welcome you to Cape Cod in the most Cape Cod way
          possible: drinking cocktails at a family-run bar as the sun sets over
          an outstanding view of the beach.
        </p>
      </div>
      <hr />
      <div>
        <img alt="Wedding Rings" src={rings} />
        <h2>The Big Day</h2>
        <h4>Saturday May 25, 2019</h4>
        <h4>6:00pm-12:00am</h4>
        <h3>Wychmere Beach Club</h3>
        <h4>23 Snow Inn Rd, Harwich Port, MA 02646</h4>
        <h5>Gladrags</h5>
        <p>
          A 6pm lawn ceremony followed by great cocktails, a wonderful dinner,
          charming speeches and questionable dancing. Arrive ready to party and
          we'll take care of the rest.
        </p>
      </div>
      <hr />
      <div>
        <img alt="Donuts" src={donut} />
        <h2>Memorial Day Beach Brunch</h2>
        <h4>Sunday May 26, 2019</h4>
        <h4>11:00am-1:00pm</h4>
        <h3>Beach TBD</h3>
        <h5>Sandals</h5>
        <p>
          Please feel free to join us at a local beach (weather permitting - if
          it rains we'll find somewhere else) for a post-wedding brunch. New
          England takes donuts incredibly seriously, and ours come from Hole in
          One. Kids welcome.
        </p>
      </div>
    </div>
  </Layout>
);
