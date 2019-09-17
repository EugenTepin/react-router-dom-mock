export class NavLink extends React.Component {
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
    return React.createElement("a", other, " ", children);
  }
}