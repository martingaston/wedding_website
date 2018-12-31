import React from "react";
import Layout from "../components/layout";
import FormData from "../components/formData";
import RSVPSuccess from "../components/rsvp-success";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      submitted: false,
      data: {
        firstName: "",
        firstEmail: "",
        firstRestrictions: "",
        firstMain: "chicken",
        firstFact: "",
        secondName: "",
        secondEmail: "",
        secondRestrictions: "",
        secondMain: "chicken",
        secondFact: "",
        more: ""
      }
    };

    this.handleGuest = this.handleGuest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...this.state.data })
    })
      .then(() => this.setState({ submitted: true }))
      .catch(error => alert(error));

    e.preventDefault();
  }

  handleChange = e => {
    console.log(e.target.name);
    this.setState({ data: { [e.target.name]: e.target.value } });
  };

  handleGuest(e) {
    this.setState((state, props) => {
      return { toggle: !state.toggle };
    });
  }

  render() {
    const { data } = this.state;

    const first = {
      name: data.firstName,
      email: data.firstEmail,
      restrictions: data.firstRestrictions,
      main: data.firstMain,
      fact: data.firstFact
    };

    const second = {
      name: data.secondName,
      email: data.secondEmail,
      restrictions: data.secondRestrictions,
      main: data.secondMain,
      fact: data.secondFact
    };

    if (this.state.submitted)
      return <RSVPSuccess location={this.props.location} />;
    return (
      <Layout title="RSVP" location={this.props.location}>
        <p>
          We're really excited to have you join us on the day, but also it warms
          our hearts to know that you like us enough to fill out a form.
        </p>
        <p>
          We'd really appreciate it if you could make sure you fill out the form
          for each individual person attending so we can manage the menu
          choices. Have no fear, all the options are delicious.
        </p>
        <p>
          We'll also pop your e-mail into a mailing list so we can easily
          contact everyone with updates and gossip, but if you'd prefer not to
          be contacted this way then that's also fine - just let us know and
          we'll take you off.
        </p>
        <p>
          If you could also let us know your choices by <b>April 15</b> that
          will give us enough time to both sort everything out and get very
          excited about seeing you.
        </p>
        <form
          data-netlify="true"
          name="rsvp"
          id="rsvp"
          onSubmit={this.handleSubmit}
        >
          <FormData
            handleChange={this.handleChange}
            values={first}
            id="first"
            pronoun="you"
            adjective="your"
          />
          <div>
            Are you also responding for another guest?
            <ul>
              <li>
                <input
                  type="radio"
                  id="guest_no"
                  name="guest"
                  onChange={this.handleGuest}
                  checked={!this.state.toggle}
                />
                <label for="guest_no">No, just me</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="guest_yes"
                  name="guest"
                  onChange={this.handleGuest}
                  checked={this.state.toggle}
                />
                <label for="guest_yes">Yes, they're very lazy</label>
              </li>
            </ul>
          </div>
          {this.state.toggle && (
            <FormData
              handleChange={this.handleChange}
              values={second}
              id="second"
              pronoun="they"
              adjective="their"
            />
          )}
          <div>
            <label for="more">
              Is there anything else you'd like to let us know?
            </label>
            <textarea
              onChange={this.handleChange}
              value={this.state.more}
              id="more"
              name="more"
              cols="35"
              rows="10"
            />
          </div>
          <div>
            <input type="submit" value="I promise I'll be good" />
          </div>
        </form>
      </Layout>
    );
  }
}
