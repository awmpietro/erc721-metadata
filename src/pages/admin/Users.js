import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap';
import Datatable from 'react-bs-datatable';
import axios from 'axios';

import Spin from '../../components/Spin';
import Auth from '../../components/Auth';

const header = [
  { title: 'Nome', prop: 'name', cell: row => (<Link to={{ pathname: `/admin/usuario/${row.id}` }} >{row.name}</Link>),  sortable: true, filterable: true },
  { title: 'Email', prop: 'email', sortable: true, filterable:true },
  { title: 'Criado em', prop: 'created', sortable: true, filterable:true },
  { title: 'Status', prop: 'status', sortable: true, filterable: true },
];

class Users extends Component {
  constructor(props) {
      super(props);
      this.state = {users: [], loading: false}
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    this.setState({
      loading:true,
    })
    const AuthHelper = new Auth();
    const token = AuthHelper.getToken();
    axios.get(`${process.env.REACT_APP_URL}/admin/all`, { headers: {"Authorization" : `${token}`} }).then(response => {
      if(response.data.error === 0) {
        this.setState({
          loading:false,
          users:response.data.data
        })
      } 
    }).catch((error) => {
      this.setState({
        loading:false
      })
      console.log(error.message)
    })
  }

  render() {
    if(this.state.loading) {
      return <Spin />
    }
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Usuários Administrativos</h1>
          </div>
          <Col md={12} lg={12} xs={12}>
              <div className="card">
                  <div className="card-header">
                      Lista de usuários do sistema
                  </div>
                  <div className="card-body">
                      <Datatable
                        tableHeader={header}
                        tableBody={this.state.users}
                        keyName="userTable"
                        tableClass="striped hover responsive"
                        rowsPerPage={5}
                        rowsPerPageOption={[25, 10, 15, 20]}
                        initialSort={{prop: "nome", isAscending: true}}
                        //onSort={onSortFunctions}
                    />
                  </div>
              </div>
          </Col>
      </main>
    );
  }
}

export default Users;