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

export default class CapeCod extends React.Component {
  render() {
    return (
      <Layout title="Cape Cod" location={this.props.location}>
        <article id="map">
          <figure>
            <CapeCodMap />
          </figure>
          <section>
            <p>
              Cape Cod has been a beloved break destination for the Langsen
              family for many years - so we can't wait to get to share it with
              everyone. Cape Cod's little towns are so sweet and full of
              independent shops and artists, and the area has more to do than we
              could possibly recommend - but here are a few of our current
              favorites to help you plan your trip.
            </p>
            <h2>Where To Stay</h2>
            <div className="two-grid">
              <div>
                <div className="reservations">
                  <img alt="" src={house1} />
                  <h3>Treat Yourself</h3>
                  <ul>
                    <li>
                      <a href="http://wychmerebeachclub.com/guest-rooms/">
                        Wychmere Beach Club
                      </a>
                    </li>
                    <li>
                      <a href="https://wequassett.com/">Wequassett</a>
                    </li>
                    <li>
                      <a href="http://www.chathambarsinn.com/">
                        Chatham Bars Inn
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="reservations">
                  <img alt="" src={house2} />
                  <h3>Make Yourself At Home</h3>
                  <ul>
                    <li>
                      <a href="https://www.airbnb.co.uk/">Airbnb</a>
                    </li>
                    <li>
                      <a href="https://www.vrbo.com/vacation-rentals">VRBO</a>
                    </li>
                    <li>
                      <a href="https://www.homeaway.com/d/44875/cape-cod">
                        Homeaway
                      </a>
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
                      <a href="http://www.anenglishgardenbb.com/">
                        An English Garden Bed and Breakfast
                      </a>
                    </li>
                    <li>
                      <a href="https://www.captainfreemaninn.com/">
                        Captain Freeman Inn
                      </a>
                    </li>
                    <li>
                      <a href="https://www.seadarinn.com/">
                        Seadar Inn by the Sea
                      </a>
                    </li>
                    <li>
                      <a href="https://www.chathamseafarer.com/">
                        Chatham Seafarer Inn
                      </a>
                    </li>
                    <li>
                      <a href="http://www.winsteadinn.com/">Winstead Inn</a>
                    </li>
                    <li>
                      <a href="https://www.chathamtides.com/">Chatham Tides</a>
                    </li>
                  </ul>
                </div>
                <div className="reservations">
                  <img alt="" src={house4} />
                  <h3>Keep It Simple</h3>
                  <ul>
                    <li>
                      <a href="https://www.shoalscapecodinn.com/">
                        Handkerchief Shoals (we have 15 rooms reserved as a
                        block between $130-$150 per night)
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
                      <a href="https://www.tripadvisor.co.uk/Attractions-g60754-Activities-Wellfleet_Cape_Cod_Massachusetts.html">
                        Chatham
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
