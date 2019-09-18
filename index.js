import React from "react";

export class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.aRef = React.createRef();
  }
  componentDidMount() {
    this.aRef.current.addEventListener("click", e => {
      var event = new CustomEvent("nav-link-click", {
        detail: this.props,
        bubbles: true
      });
      this.aRef.current.dispatchEvent(event);
      e.preventDefault();
    });
  }

  render() {
    const {
      to,
      children,
      activeClassName,
      activeStyle,
      exact,
      strict,
      location,
      "aria-current": aria_current,
      ...other
    } = this.props;

    other.href = to;
    other.ref = this.aRef;
    return React.createElement("a", other, " ", children);
  }
}
