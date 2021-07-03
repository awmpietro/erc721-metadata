import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <Link
          to="/contracts/erc721"
          className="navbar-brand col-sm-3 col-md-2 mr-0"
        >
          ERC-721 Token Metadata
        </Link>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(Header);
