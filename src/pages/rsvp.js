import React from "react";
import Layout from "../components/layout";
import FormData from "../components/formData";

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };

    this.handleGuest = this.handleGuest.bind(this);
  }

  handleGuest(e) {
    this.setState({ toggle: true });
  }

  render() {
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
          be contacted this way then that's also fine.
        </p>
        <p>
          If you could also let us know your choices by <b>April 15</b> that
          will give us enough time to sort everything out.
        </p>
        <form id="rsvp" action="/submit" method="POST">
          <FormData />
          Are you also responding for another guest?
          <ul>
            <li>
              <input
                type="radio"
                id="guest_no"
                name="guest"
                checked={!this.state.toggle}
              />
              <label for="guest_no">No, they can sort it themselves</label>
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
          {this.state.toggle && <FormData />}
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
  }
}
