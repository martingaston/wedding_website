import React from "react";
import Layout from "../components/layout";

import rings from "../images/wedding-rings.svg";
import donut from "../images/donut.svg";
import crab from "../images/crab.svg";

export default props => (
  <Layout title="Schedule" location={props.location}>
    <div className="one-column">
      <div>
        <img alt="Crab Cakes" src={crab} />
        <h2>Welcome Party</h2>
        <h4>Friday May 24, 2019</h4>
        <h4>6:30pm-10:00pm</h4>
        <h3>Borsari Gallery</h3>
        <h4>524 Main St, Dennis, MA 02638</h4>
        <h5>Casual</h5>
        <p>
          Join us in Dennis for some nibbles, a cold drink and a warm welcome
          ahead of the main event. Kids welcome, carpooling encouraged (limited
          parking) &amp; a round of stories and toasts from 7:30pm.
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
          5:30pm seating for a lawn ceremony followed by great cocktails, a
          wonderful dinner, charming speeches and questionable dancing. Arrive
          ready to party and we'll take care of the rest.
        </p>
      </div>
      <hr />
      <div>
        <img alt="Donuts" src={donut} />
        <h2>Coffee &amp; Donuts</h2>
        <h4>Sunday May 26, 2019</h4>
        <h4>11:00am-12:30pm</h4>
        <h3>Brooks Park</h3>
        <h4>1 Oak Street, Harwich, MA 02645</h4>
        <h5>Day-after Casual</h5>
        <p>
          Join us at the picnic tables with blue check tablecloths for our first
          dozen donuts as a married couple. New England takes donuts incredibly
          seriously; ours come from Hole in One. Kids welcome.
        </p>
      </div>
    </div>
  </Layout>
);
