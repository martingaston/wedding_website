import React from "react";
import Layout from "../components/layout";

import usa from "../images/united-states-of-america-flag-icon-128.png";
import uk from "../images/united-kingdom-flag-icon-128.png";

export default props => (
  <Layout title="Travel" location={props.location}>
    <article id="travel">
      <div className="two-grid">
        <div>
          <img alt="USA flag" className="flag" src={usa} />
          <p>
            Unless you're brave or close enough to take to the roads, you start
            by booking a flight into Boston's Logan International Airport.
            Boston is served by American, Delta, Southwest, United and JetBlue.
          </p>
          <p>
            From there, you can either rent a car and drive straight to the Cape
            (about 90 min) OR get the Plymouth &amp; Brockton bus from the
            airport to Hyannis or Barnstable and request a ride from there (Uber
            and Lyft do exist on the Cape, just not in massive quantities). The
            Langsen family has taken a lot of those buses over the years and
            this is a good option if you're coordinating with a larger group
            with a car arriving at a different time.
          </p>
        </div>
        <div>
          <img alt="Union flag" className="flag" src={uk} />
          <p>
            Flights from London to Boston Logan Airport include Virgin Atlantic
            from Heathrow and Norweigan from Gatwick, though we'd recommend the
            former over the latter. You can rent a car to travel from Logan to
            Cape Cod, or alternatively ride the{" "}
            <a href="https://www.p-b.com/">
              <em>Plymouth &amp; Brockton Street Railway Co</em>
            </a>{" "}
            which we'd call a bus.
          </p>
          <p>
            Those travelling to the US from the UK will need a valid ESTA, which
            can be{" "}
            <a href="https://esta.cbp.dhs.gov/esta/">applied for online</a> and
            costs $14 (about £11). These are pretty quick to process so we'd
            recommend you fill in the form about a month before your flight.
            It's all electronic so you won't need to print anything out.
          </p>
          <p>
            You'll need to fill out a landing card (which will be handed out on
            your flight) so it's usually a pretty good idea to pack a pen in
            your carry on luggage. Also, people who carry a pen always look
            smart.
          </p>
          <p>
            May 27 also happens to be{" "}
            <a href="https://en.wikipedia.org/wiki/Memorial_Day">
              Memorial Day
            </a>{" "}
            in the US, which is a federal holiday. Americans do not get a great
            deal of public holidays so this is quite a big occasion.
          </p>
          <p>Americans drive on the right.</p>
        </div>
      </div>
    </article>
  </Layout>
);
