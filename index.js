import React from "react";

export class NavLink extends React.Component {
  render() {
    const { 
        children,
        activeClassName,
        activeStyle,
        exact,
        strict,
        location,
        "aria-current": aria_current,
        ...other 
    } = this.props;

    return <a {{...other}} >{children}</a> ;
  }
}






  