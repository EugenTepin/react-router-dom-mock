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
      className,
      style,
      ...other
    } = this.props;


    if(window.location.pathname === to){
      other.className = className + ' ' + activeClassName;
      
      const inlineStyle = Object.keys(activeStyle).reduce((result, propName)=> {
        return result + propName + ':' +  activeStyle[propName] + ';';
      },'');
      
      other.style = style + inlineStyle;
    }else{
      other.className = className;
      other.style = style;
    }
    other.href = to;
    other.ref = this.aRef;
    return React.createElement("a", other, " ", children);
  }
}
