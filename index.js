import React from "react";

export class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.aRef = React.createRef();
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
      onClick,
      "aria-current": aria_current,
      ...other
    } = this.props;

    other.href = to;
    other.ref = this.aRef;
    
    other.onClick = (e) => {
      var event = new CustomEvent("nav-link-click", {
        detail: this.props,
        bubbles: true
      });
      this.aRef.current.dispatchEvent(event);
      if(onClick){
        onClick(e);
      }
      e.preventDefault();
    };
    return React.createElement("a", other, " ", children);
  }
}

