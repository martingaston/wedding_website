import React from "react";
import CapeCodMap from "../components/capeCodMap";
import Layout from "../components/layout";

import dining from "../images/restaurant.svg";
import binoculars from "../images/binoculars.svg";
import tent from "../images/tent.svg";
import ship from "../images/cruise.svg";

export default class CapeCod extends React.Component {
  render() {
    return (
      <Layout title="Cape Cod" location={this.props.location}>
        <article id="map">
          <figure>
            <CapeCodMap />
          </figure>
          <p>
            Cape Cod has been a beloved break destination for the Langsen family
            for many years - so we can't wait to get to share it with everyone.
            Cape Cod's little towns are so sweet and full of independent shops
            and artists, and the area has more to do than we could possibly
            recommend - but here are a few of our current favorites to help you
            plan your trip.
          </p>
          <div className="two-grid">
            <div>
              <div className="lineup">
                <img alt="" src={dining} />
                <h3>Dining</h3>
                <ul>
                  <li>Arnold's</li>
                  <li>PJ's</li>
                  <li>Chocolate Sparrow</li>
                  <li>Sundae School</li>
                  <li>Blackfish</li>
                  <li>Viera</li>
                  <li>Governor Bradford</li>
                </ul>
              </div>
              <div className="lineup">
                <img alt="" src={binoculars} />
                <h3>Sights</h3>
                <ul>
                  <li>Chatham</li>
                  <li>Wellfleet</li>
                  <li>Provincetown</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="lineup">
                <img alt="" src={tent} />
                <h3>Activities</h3>
                <ul>
                  <li>Cape Cod Rail Trail</li>
                  <li>National Seashore</li>
                  <li>Whale Watching</li>
                  <li>Art's Dune Tours</li>
                </ul>
              </div>
              <div className="lineup">
                <img alt="" src={ship} />
                <h3>Cross the Sea</h3>
                <ul>
                  <li>Martha's Vineyard</li>
                  <li>Nantucket</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}
