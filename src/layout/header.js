import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import { logout } from '../redux/actions';

class Header extends Component {

    // logout = () => {
    //     return this.props.logout();
    // }

    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Link to="/contracts/erc721" className="navbar-brand col-sm-3 col-md-2 mr-0">Get ERC721 Token Metadata</Link>
                {/* <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link to="#" className="nav-link">Log out</Link>
                    </li>
                </ul> */}
            </nav>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators( {}, dispatch)

export default connect(null, mapDispatchToProps)(Header)