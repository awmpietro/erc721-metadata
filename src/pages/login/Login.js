import React, { Component } from 'react';
import {Alert} from 'reactstrap'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { login } from '../../redux/actions';
import Spin from '../../components/Spin';
import '../../assets/css/login.css';

class Login extends Component {

  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.state = {credentials: {email: '', password: ''}};  
  }

  componentDidMount() {
    if(this.props.isLoggedIn) {
          this.props.history.push('/dashboard')
      }
  }

  componentDidUpdate(prevProps) {
      if(this.props.isLoggedIn) {
          this.props.history.push('/dashboard')
      }
    }

  changeHandler = event => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.credentials);
  }

  render() {
    if(this.props.loading) {
      return <Spin />
    }
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
            <h2 className="text-center">Log in</h2>       
            <div className="form-group">
                <input type="email" 
                  className="form-control" 
                  name = "email" 
                  placeholder="email" 
                  value={this.state.credentials.email} 
                  onChange={this.changeHandler} 
                  required="required" 
                />
            </div>
            <div className="form-group">
                <input type="password" 
                  className="form-control" 
                  name="password" 
                  placeholder="Password" 
                  value={this.state.credentials.password} 
                  onChange={this.changeHandler} 
                  required="required" 
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </div>
            {this.state.error ? <Alert color='danger'>{this.state.msg}</Alert> : null}
            
        </form>
    </div>
    );
  }
}

const mapStateToProps = state => ({user: state.admin.user, loading: state.admin.loading, isLoggedIn: state.admin.isLoggedIn})
const mapDispatchToProps = dispatch => bindActionCreators( { login }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)