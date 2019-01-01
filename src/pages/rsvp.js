import React from "react";
import Layout from "../components/layout";
import FormData from "../components/formData";
import { Success, Failure } from "../components/rsvp-success";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      error: false,
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
    e.preventDefault();

    const form = e.target;
    const data = encode({
      "form-name": form.getAttribute("name"),
      ...this.state.data
    });

    // no-cache=1 ensures Gatsby doesn't delegate the form to a service worker instead of Netlify
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data
    })
      .then(() => this.setState({ submitted: true }))
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [name]: value
      }
    }));
  };

  handleGuest(e) {
    this.setState((state, props) => {
      return { toggle: !state.toggle };
    });
  }

  componentDidMount() {
    // we need the full form to be there at first load for the Netlify form robot, but we hide it after component mounts.
    this.setState({ toggle: false });
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

    const formName = "rsvp-2019";

    if (this.state.error) return <Failure location={this.props.location} />;
    if (this.state.submitted) return <Success location={this.props.location} />;
    return (
      <Layout title="RSVP" location={this.props.location}>
        <article>
          <section>
            <p>
              We're really excited to have you join us on the day, but it also
              warms our hearts to know that you like us enough to fill out a
              form. If you could get back to us by <b>April 10</b> that would be
              splendid.
            </p>
            <p>
              We'd also really appreciate it if you could make sure you fill out
              the form for each individual person attending in your party so we
              can manage the menu choices. Have no fear, all the options are
              delicious.
            </p>
            <form
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              method="post"
              action=""
              name={formName}
              id="rsvp"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value={formName} />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
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
                    <label htmlFor="guest_no">No, just me</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="guest_yes"
                      name="guest"
                      onChange={this.handleGuest}
                      checked={this.state.toggle}
                    />
                    <label htmlFor="guest_yes">Yes, they're very lazy</label>
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
                <label htmlFor="more">
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
          </section>
        </article>
      </Layout>
    );
  }
}
