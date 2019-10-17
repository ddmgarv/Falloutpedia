import React, { Component } from "react";
import { connect } from "react-redux";
import * as optionsActions from "../../actions/optionsActions";
import NavItems from "./NavItems";
import Loader from "../Utilities/Loader";
import "./header.scss";
class Header extends Component {
  state = {
    dropdown: false
  };
  componentDidMount() {
    this.props.getOptions();
  }
  handleDropdown = () => {
    const { state } = this;
    const { dropdown } = this.state;
    this.setState({
      ...state,
      dropdown: !dropdown
    });
  };
  renderOptions() {
    const {
      loading,
      error,
      navData: { games, options },
      navData
    } = this.props;
    const { dropdown } = this.state;

    if (loading) {
      return (
        <div className="centered-container-full">
          <Loader color={"#98ca3f"} />
        </div>
      );
    } else if (Object.keys(navData).length > 0) {
      return (
        <NavItems
          games={games}
          options={options}
          dropdown={dropdown}
          handleDropdown={this.handleDropdown}
        />
      );
    } else if (error !== "") {
      return "Error";
    }
  }
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">{this.renderOptions()}</div>
      </nav>
    );
  }
}

const mapStateToProps = reducers => reducers.optionsReducer;

export default connect(
  mapStateToProps,
  optionsActions
)(Header);
