import React from "react";

export default props => {
  const { pronoun, adjective } = props
  return (
    <div>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="restrictions">Do {pronoun} have any dietary restrictions?</label>
        <input
          type="text"
          id="restrictions"
          name="restrictions"
          placeholder="e.g. nut allergy, gluten intolerant, vegan..."
        />
      </div>
      <div>
        <label for="main">
          What terribly delicious dish would {pronoun} like for {adjective} main?
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
        <label for="fact">Tell us an interesting fact about {pronoun === "you" ? "yourself" : "them"}:</label>
        <input type="text" id="fact" name="fact" required />
      </div>
    </div>
  );
};
