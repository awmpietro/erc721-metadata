import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
    
    render() {
        return (
            <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column flex-nowrap">
                        
                        <NavItem className="nav-item">
                            <span className="nav-link" ><FontAwesomeIcon icon={faFileSignature} />  Contracts</span>
                            <ul id="subclientes" className="ml-3 flex-column nav">
                                <NavItem className="nav-item">
                                    <NavLink tag={Link} to="/customers/add-customer" className="nav-link" >
                                        ERC-721
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </NavItem>
                    </ul>
                </div>
            </Nav>
        );
    }
}

export default withRouter(Sidebar);