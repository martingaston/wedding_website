import React from "react";
import Layout from "../components/layout";

export default props => (
  <Layout title="RSVP" location={props.location}>
    <p>
      We're really excited to have you join us on the day, but also it warms our
      hearts to know that you like us enough to fill out a form.
    </p>
    <p>
      We'd really appreciate it if you could make sure you fill out the form for
      each individual person attending so we can manage the menu choices. Have
      no fear, all the options are delicious.
    </p>
    <p>
      We'll also pop your e-mail into a mailing list so we can easily contact
      everyone with updates and gossip, but if you'd prefer not to be contacted
      this way then that's also fine.
    </p>
    <p>
      If you could also let us know your choices by <b>April 15</b> that will
      give us enough time to sort everything out.
    </p>
    <form id="rsvp" action="/submit" method="POST">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="restrictions">Do you have any dietary restrictions?</label>
        <input
          type="text"
          id="restrictions"
          name="restrictions"
          placeholder="e.g. nut allergy, gluten intolerant, vegan..."
        />
      </div>
      <div>
        <label for="main">
          What terribly delicious dish would you like for your main?
        </label>
        <select id="main" name="main" required>
          <option>
            Herb Roasted All Natural Chicken Breast with Corn Whipped Potatoes,
            Confit Leg, Asparagus, Exotic Mushrooms Madeira Sauce (GF)
          </option>
          <option>
            Black Angus Sirloin &amp; Grilled Loch Duart Salmon with Lemon-Olive
            Oil Crushed Yukon Potatoes, Native Spinach Charred Tomato Coulis
            &amp; Balsamic Reduction (GF)
          </option>
          <option>
            Wild Mushroom Ravioli with Exotic Mushrooms, Native Corn, Asparagus
            and Light Truffle Cream Sauce (V)
          </option>
        </select>
      </div>
      <div>
        <label for="fact">Tell us an interesting fact about yourself:</label>
        <input type="text" id="fact" name="fact" required />
      </div>
      <div>
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
      </div>
      <div>
        <label for="more">
          Is there anything else you'd like to let us know?
        </label>
        <textarea id="more" name="more" cols="35" rows="10" />
      </div>
      <div>
        <input type="submit" value="I promise I'll be good" />
      </div>
    </form>
  </Layout>
);
