import React from "react";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./header";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/spin.css";
import "../assets/css/layout.css";
import "bootstrap/dist/js/bootstrap.min";

const Main = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <Header />
          <Container fluid={true}>
            <Component {...matchProps} />
          </Container>
        </div>
      )}
    />
  );
};

// const mapStateToProps = state => ({isLoggedIn: state.admin.isLoggedIn})
// export default connect(mapStateToProps)(Main)

export default Main;
