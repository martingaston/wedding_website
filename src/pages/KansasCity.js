import React from "react";
import CapeCodMap from "../components/capeCodMap";
import Layout from "../components/layout";

import dining from "../images/restaurant.svg";
import binoculars from "../images/binoculars.svg";
import tent from "../images/tent.svg";
import ship from "../images/cruise.svg";

import house1 from "../images/001-mansion.svg";
import house2 from "../images/003-house-1.svg";
import house3 from "../images/004-house-2.svg";
import house4 from "../images/005-house-3.svg";

export default class KansasCity extends React.Component {
  render() {
    return (
      <Layout title="Kansas City" location={this.props.location}>
        <article id="map">
          <figure>
            <CapeCodMap />
          </figure>
          <section>
            <p>
              While we are still realatively new to the area, we have done a bunch of exploring.
              Below are some places to stay and good eats.
            </p>
            <h2>Where To Stay</h2>
            <div className="two-grid">
              <div>
                <div className="reservations">
                  <img alt="" src={house1} />
                  <h3>Treat Yourself</h3>
                  <ul>
                    <li>
                      <a href="https://www.marriott.com/hotels/travel/mcipl-kansas-city-marriott-country-club-plaza/">
                        Kansas City Marriott Country Club Plaza
                      </a>
                    </li>
                    <li>
                      <a href="https://crossroadshotelkc.com/">
                        Crossroads Hotel
                      </a>
                    </li>
                    <li>
                      <a href="https://www.kansascityic.com/">
                       InterContinental Kansas City at the Plaza
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="reservations">
                  <img alt="" src={house2} />
                  <h3>Make Yourself At Home</h3>
                  <ul>
                    <li>
                      <a href="https://www.airbnb.com/">Airbnb</a>
                    </li>
                    <li>
                      <a href="https://www.vrbo.com/vacation-rentals">VRBO</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="reservations">
                  <img alt="" src={house3} />
                  <h3>Charm To Spare</h3>
                  <ul>
                    <li>
                      <a href="https://oakstreetmansionkc.com/">
                        Oak Street Mansion
                      </a>
                    </li>
                    <li>
                      <a href="https://www.thetruitt.com/">
                        The Truitt
                      </a>
                    </li>
                    <li>
                      <a href="https://southmoreland.com/">
                        Southmoreland on the Plaza
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="reservations">
                  <img alt="" src={house4} />
                  <h3>Keep It Simple</h3>
                  <ul>
                    <li>
                      <a href="https://www.marriott.com/hotels/travel/mcimt-springhill-suites-kansas-city-plaza/">
                        SpringHill Suites by Marriott Kansas City Plaza
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hilton.com/en/hotels/mkchshx-hampton-suites-kansas-city-country-club-plaza/">
                         Hampton Inn & Suites Kansas City-Country Club Plaza
                      </a>
                    </li>
                    <li>
                      <a href="https://www.marriott.com/hotels/travel/mcikc-residence-inn-kansas-city-country-club-plaza/">
                        Residence Inn by Marriott Kansas City Country Club Plaza
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>What To Do</h2>
            <div className="two-grid">
              <div
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div className="lineup">
                  <img alt="" src={dining} />
                  <h3>Dining</h3>
                  <ul>
                    <li>
                      <a href="https://www.arnoldsrestaurant.com/">Arnold's</a>
                    </li>
                    <li>
                      <a href="http://www.pjscapecod.com">PJ's</a>
                    </li>
                    <li>
                      <a href="https://www.hotchocolatesparrow.com/">
                        Hot Chocolate Sparrow
                      </a>
                    </li>
                    <li>
                      <a href="https://www.sundaeschool.com/">Sundae School</a>
                    </li>
                    <li>
                      <a href="https://www.capecodchefs.com/restaurant/blackfish/">
                        Blackfish
                      </a>
                    </li>
                    <li>
                      <a href="http://www.vieracapecod.com/">Viera</a>
                    </li>
                    <li>
                      <a href="https://www.tripadvisor.co.uk/Attraction_Review-g41778-d105421-Reviews-Governor_Bradford-Provincetown_Cape_Cod_Massachusetts.html">
                        Governor Bradford
                      </a>
                    </li>
                    <li>
                      <a href="http://www.thebrewsterwoodshed.com/">Woodshed</a>
                    </li>
                    <li>
                      <a href="https://theholecapecod.com/">The Hole in One</a>
                    </li>
                    <li>
                      <a href="http://www.thesquire.com/">Chatham Squire</a>
                    </li>
                    <li>
                      <a href="http://www.birdinthesun.com/">Sunbird Kitchen</a>
                    </li>
                    <li>
                      <a href="https://www.land-ho.com/">Land Ho!</a>
                    </li>
                    <li>
                      <a href="https://sesuit-harbor-cafe.com/">
                        Sesuit Harbor Cafe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="lineup">
                  <img alt="" src={binoculars} />
                  <h3>Sights</h3>
                  <ul>
                    <li>
                      <a href="https://www.theworldwar.org/">
                        National WWI Museum and Memorial
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tripadvisor.co.uk/Attractions-g60754-Activities-Wellfleet_Cape_Cod_Massachusetts.html">
                        Wellfleet
                      </a>
                    </li>
                    <li>
                      <a href="https://provincetowntourismoffice.org/">
                        Provincetown
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="lineup">
                  <img alt="" src={tent} />
                  <h3>Activities</h3>
                  <ul>
                    <li>
                      <a href="https://www.mass.gov/locations/cape-cod-rail-trail">
                        Cape Cod Rail Trail
                      </a>
                    </li>
                    <li>
                      <a href="http://capecodonline.com/cape-cod-beaches/national-seashore/">
                        National Seashore
                      </a>
                    </li>
                    <li>
                      <a href="https://www.affordable-cape-cod-vacations.com/cape-cod-whale-watching.html">
                        Whale Watching
                      </a>
                    </li>
                    <li>
                      <a href="http://www.artsdunetours.com/">
                        Art's Dune Tours
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="lineup">
                  <img alt="" src={ship} />
                  <h3>Cross the Sea</h3>
                  <ul>
                    <li>
                      <a href="https://www.vineyardferries.com/">
                        Martha's Vineyard
                      </a>
                    </li>
                    <li>
                      <a href="https://www.nantucketferries.com/">Nantucket</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
      </Layout>
    );
  }
}
