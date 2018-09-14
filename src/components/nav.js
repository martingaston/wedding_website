import React from "react";
import { Link } from "gatsby";

function List(props) {
  const activePath = props.path;
  const linkPath = props.link;
  if (activePath === linkPath) {
    return <ActiveLink link={linkPath} text={props.text} />;
  } else {
    return <Li link={linkPath} text={props.text} />;
  }
}

function ActiveLink(props) {
  return (
    <li className="active">
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
}

function Li(props) {
  return (
    <li>
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
}

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div id="details">
          <div>
            <a href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NXI2dTVrYjJuYzNyOHByb2o4ZTA2Z3NwNzggc3F1aWRtYW5AbQ&amp;tmsrc=squidman%40gmail.com">
              <i className="far fa-calendar-alt" />
              May 25, 2019
            </a>
          </div>
          <div>
            <a href="https://www.google.com/maps/search/?api=1&amp;query=wychmere+beach+club">
              <i className="fas fa-globe-americas" />
              Harwich, MA
            </a>
          </div>
        </div>
        <ul>
          <List path={this.props.path} link={"/"} text={"Home"} />
          <List path={this.props.path} link={"/lineup"} text={"Lineup"} />
          <List path={this.props.path} link={"/capecod"} text={"Cape Cod"} />
          <List path={this.props.path} link={"/travel"} text={"Travel"} />
          <List path={this.props.path} link={"/registry"} text={"Registry"} />
          <List path={this.props.path} link={"/faq"} text={"FAQ"} />
        </ul>
      </nav>
    );
  }
}
