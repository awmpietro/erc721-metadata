import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

// import{ load } from "./redux/actions";
import Main from './layout/main';

import Erc721 from './pages/contracts/Erc721'

//import Login from './pages/login/Login';

 const App = props => {

    return (
        <BrowserRouter basename="/erc721-metadata" >
            <Switch>
                <Main path='/' component={Erc721} />
                <Main path='/contracts/erc721' component={Erc721} />
             </Switch>
        </BrowserRouter>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators( {}, dispatch)

export default connect(null, mapDispatchToProps)(App)