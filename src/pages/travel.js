import React from "react";
import Layout from "../components/layout";

import plane from "../images/airplane.jpg";
import car from "../images/car.png";

export default props => (
  <Layout title="Travel" location={props.location}>
    <article id="travel">
      <div className="two-grid">
        <div>
          <img alt="" src={plane} />
          <h3>Flying.</h3>
          <p>
            There are 2 airports in the Kansas City metro area, but you only want 
            to look for flights to/from Kansas City International Airport (MCI).
            While convenient, Charles Wheeler airport only services private charters and 
            other commercial flights. 
            
            
            
            MCI is mostly served by Southwest and 
            American airlines, but United, Frontier and Delta also fly here depending 
            on where you're coming from. Southwest has direct flights from most major Texas airports
            and who we normally fly with because they're normally the most affordable.

          </p>
          <p>
            Unfortunately, the airport is in the sticks and there isn't good public transit
            into Kansas City. You will probably want to rent a car if you are able. For reference, 
            MCI is 30 miles from our house and 24 miles from the Wedding venue.
          </p>
        </div>
        <div>
          <img alt="" src={car} />
          <h3>Driving.</h3>
          <p>
            Depending on where you're looking to drive from, the drive isn't that bad barring traffic 
            in Texas... Unless you're packing the car, it will likely be cheaper to fly if coming from Texas.
            </p>
          <p>
            The upside of driving is being able to explore the city without having to rent a car
            or rely on Uber/Taxis/Lyft to get around. 
          </p>

        </div>
      </div>
    </article>
  </Layout>
);
