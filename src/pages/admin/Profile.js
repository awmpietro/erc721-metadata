import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Profile extends Component {

  constructor(props) {
      super(props);
      this.state = {add: this.props.user};  
  }

  changeHandler = event => {
    const field = event.target.name;
    const add = this.state.add;
    add[field] = event.target.value;
    return this.setState({add});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Usuários</h1>
            </div>
            <Col md={12} lg={12} xs={12}>
                <div className="card">
                    <div className="card-header">
                        Meu perfil
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col md={6} lg={6} xs={12} sm={12}>
                                    <div className="form-group">
                                        <label htmlFor="nome-usuario">Nome</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id="nome-usuario" 
                                        name="name"
                                        value={this.state.add.name} 
                                        onChange={this.changeHandler} 
                                        placeholder="Nome" />
                                    </div>
                                </Col>
                                <Col md={6} lg={6} xs={12} sm={12}>
                                    <div className="form-group">
                                        <label htmlFor="email-usuario">Email</label>
                                        <input type="email" 
                                        className="form-control" 
                                        id="email-usuario" 
                                        name="email" 
                                        value={this.state.add.email} 
                                        onChange={this.changeHandler} 
                                        placeholder="Email" />
                                    </div>
                                </Col>
                                <Col md={6} lg={6} xs={12} sm={12}>
                                    <div className="form-group">
                                        <label htmlFor="cpf-cliente">Senha</label>
                                        <input type="password" 
                                        className="form-control" 
                                        id="password-usuario" 
                                        name="password" 
                                        value={this.state.add.senha} 
                                        onChange={this.changeHandler} 
                                        placeholder="Senha" />
                                    </div>
                                </Col>
                                <Col md={6} lg={6} xs={12} sm={12}>
                                    <div className="form-group">
                                        <label htmlFor="cep-cliente">Repetir Senha</label>
                                        <input type="password" 
                                        className="form-control" 
                                        id="password2-usuario" 
                                        name="senha2" 
                                        value={this.state.add.senha2} 
                                        onChange={this.changeHandler} 
                                        placeholder="Repetir Senha" />
                                    </div>
                                </Col>
                    
                                <Col md={12} lg={12} xs={12} sm={12}><hr/></Col>
                                <Col md={12} lg={12} xs={12} sm={12}>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Atualizar</button>
                                    </div>
                                </Col>
                            </Row>              
                        </form>
                    </div>
                </div>
            </Col>
        </main>
    );
  }
}

export default Profile;