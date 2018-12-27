import React from "react";
import Layout from "../components/layout";

export default props => (
  <Layout title="RSVP" location={props.location}>
    <p>RSVP</p>
    <form action="/submit" method="POST">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label for="restrictions">Dietary restrictions?</label>
        <input type="text" id="restrictions" name="restrictions" />
        <label for="main">
          What terribly delicious dish would you like for your main?
        </label>
        <select id="main" name="main">
          <option>Chicken</option>
          <option>Fish</option>
        </select>
      </div>
      <div>
        <label for="fact">Tell us an interesting fact about yourself</label>
        <input type="text" id="fact" name="fact" />
      </div>
      Are you also responding for another guest?
      <ul>
        <li>
          <input type="radio" checked id="guest_no" name="guest" />
          <label for="guest_no">No, they can sort it themselves</label>
        </li>
        <li>
          <input type="radio" id="guest_yes" name="guest" />
          <label for="guest_yes">Yes, they're very lazy</label>
        </li>
      </ul>
      <label for="more">
        Is there anything else you'd like to let us know?
      </label>
      <textarea id="more" name="more" cols="35" rows="10" />
      <input type="submit" value="I promise I'll be good" />
    </form>
  </Layout>
);
