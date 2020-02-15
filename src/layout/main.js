import React from 'react';
import { Route } from 'react-router-dom';
//import { Route, Redirect } from 'react-router-dom';
import { Container} from 'reactstrap';
// import { connect } from "react-redux";

import Header from './header';
// import Sidebar from './sidebar';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/spin.css';
import '../assets/css/layout.css';
import 'bootstrap/dist/js/bootstrap.min'

const Main = ({component: Component, ...rest}) => {
  //const { isLoggedIn } = rest;
  return (
    <Route {...rest} render={matchProps => (
      //isLoggedIn ? 
        
        <div>
          <Header/>
          <Container fluid={true}>
            {/* <Sidebar /> */}
            <Component {...matchProps} />
          </Container>
        </div>
      //:
      //<Redirect to='/' />
    )} />
  )
};


// const mapStateToProps = state => ({isLoggedIn: state.admin.isLoggedIn})
// export default connect(mapStateToProps)(Main)

export default Main