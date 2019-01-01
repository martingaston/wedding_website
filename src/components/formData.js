import React from "react";

export default props => {
  const { handleChange, id, pronoun, adjective } = props;
  const { name, email, restrictions, main, fact } = props.values;
  return (
    <div>
      <div>
        <label htmlFor={id + "Name"}>Name:</label>
        <input
          type="text"
          id={id + "Name"}
          name={id + "Name"}
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      <div>
        <label htmlFor={id + "Email"}>Email:</label>
        <input
          type="email"
          id={id + "Email"}
          name={id + "Email"}
          onChange={handleChange}
          value={email}
          required
        />
      </div>
      <div>
        <label htmlFor={id + "Restrictions"}>
          Do {pronoun} have any dietary restrictions?
        </label>
        <input
          type="text"
          id={id + "Restrictions"}
          name={id + "Restrictions"}
          placeholder="e.g. nut allergy, gluten intolerant, vegan..."
          onChange={handleChange}
          value={restrictions}
        />
      </div>
      <div>
        <label htmlFor={id + "Main"}>
          What terribly delicious dish would {pronoun} like for {adjective}{" "}
          main?
        </label>
        <select
          id={id + "Main"}
          name={id + "Main"}
          onChange={handleChange}
          value={main}
          required
        >
          <option value="chicken">
            Herb Roasted All Natural Chicken Breast with Corn Whipped Potatoes,
            Confit Leg, Asparagus, Exotic Mushrooms Madeira Sauce (GF)
          </option>
          <option value="steak">
            Black Angus Sirloin &amp; Grilled Loch Duart Salmon with Lemon-Olive
            Oil Crushed Yukon Potatoes, Native Spinach Charred Tomato Coulis
            &amp; Balsamic Reduction (GF)
          </option>
          <option value="ravioli">
            Wild Mushroom Ravioli with Exotic Mushrooms, Native Corn, Asparagus
            and Light Truffle Cream Sauce (V)
          </option>
        </select>
      </div>
      <div>
        <label htmlFor={id + "Fact"}>
          Tell us an interesting fact about{" "}
          {pronoun === "you" ? "yourself" : "them"}:
        </label>
        <input
          type="text"
          id={id + "Fact"}
          name={id + "Fact"}
          onChange={handleChange}
          value={fact}
          required
        />
      </div>
    </div>
  );
};
