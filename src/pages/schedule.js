import React from "react";
import Layout from "../components/layout";

import rings from "../images/wedding-rings.svg";
import donut from "../images/donut.svg";
import crab from "../images/crab.svg";

export default props => (
  <Layout title="Schedule" location={props.location}>
    <div className="one-column">
 {/*      <div>
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
      <hr /> */}
      <div>
        <img alt="Wedding Rings" src={rings} />
        <h2>The Big Day</h2>
        <h4>Sunday October 23, 2022</h4>
        <h4>5:30pm-10:30pm</h4>
        <h3>Fire House KC</h3>
        <h4>4518 Troost Ave, Kansas City, MO 64110</h4>
        <h5>Formal/Cocktail Attire</h5>
        <p>
          5 pm seating for a courtyard ceremony followed by great drinks, tacos, 
          charming speeches and questionable dancing.
        </p>
      </div>
      <hr />
      <div>
        <img alt="Donuts" src={donut} />
        <h2>Coffee &amp; Donuts</h2>
        <h4>Monday October 24, 2022</h4>
        <h4>10:00am-11:30am</h4>
        <h3>Tower Park</h3>
        <h4>7500 Holmes Rd, Kansas City, MO 64131</h4>
        <h5>Day-after Casual</h5>
        <p>
          Join us at the picnic tables for our first
          dozen donuts as a married couple!
        </p>
      </div>
    </div>
  </Layout>
);
