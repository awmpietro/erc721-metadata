import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {call, handleLoading} from '../../redux/actions';
import Spin from '../../components/Spin';

class Erc721 extends Component {

  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {address: "", tokenId: ""}
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.call(this.state.address, this.state.tokenId)
  }

  // renderParams(meth) {
  //   const myParams = []
  //   if(meth.params.length > 0) {
  //     for(let params of meth.params) {
  //       myParams.push(
  //         <Col md={6} lg={6} xs={12} sm={12} key={params}>
  //           <input name={params} placeholder = {params} type="text" className="form-control"  />
  //         </Col>
  //       )
  //     }
  //     return myParams;
  //   }
  //   return null;
  // }

  // renderMethods() {
  //   const {itf} = this.props;
  //   const rows = []
  //   for (let meth of itf) {
  //       rows.push(
  //       <Row key={meth.name}>
  //         <Col md={12} lg={12} xs={12} sm={12}><h6>Function:</h6></Col>
  //         <Col md={12} lg={12} xs={12} sm={12}>
  //             <div className="form-group">
  //                 <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit(meth.name, []) }>{meth.name}</button>
  //             </div>
  //         </Col>
  //         <Col md={12} lg={12} xs={12} sm={12}><h6>Params:</h6></Col>
  //         {this.renderParams(meth) ? this.renderParams(meth) : <Col md={12} lg={12} xs={12} sm={12}><p>No Params</p></Col>}
  //         <Col md={12} lg={12} xs={12} sm={12}><hr/></Col>
  //       </Row>
  //       )
  //   }
  //   return rows
  // }

  render() {
    if(this.props.loading) {
      return <Spin />
    }
    const item = this.props.data;
    return (
      <main role="main" className="col-md-12 ml-sm-auto col-lg-12 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Get ERC721 Token Metadata</h1>
          </div>
            <div className="card">
              <div className="card-body">
                  <Row>
                    <Col md={12} lg={12} xs={12} sm={12}>
                      <form onSubmit={this.handleSubmit}>
                          <Row>
                            <Col md={6} lg={6} xs={12} sm={12}>
                              <div className="form-group">
                                <input name="" placeholder = "Contract Address *" type="text" className="form-control" value={this.state.address} onChange={ e => this.setState({address: e.target.value })} required />
                              </div>
                            </Col>
                            <Col md={6} lg={6} xs={12} sm={12}>
                              <div className="form-group"> 
                                <input name="" placeholder = "Token Id *" type="text" className="form-control" value={this.state.tokenId} onChange={ e => this.setState({tokenId: e.target.value })} required  />
                              </div>
                            </Col>
                            <Col md={12} lg={12} xs={12} sm={12}><hr/></Col>
                            <Col md={12} lg={12} xs={12} sm={12}>
                              <div className="form-group"> 
                                <button type="submit" className="btn btn-primary">Send</button>
                              </div>
                            </Col>
                          </Row>
                      </form>
                    </Col>
                  </Row>
                  {typeof item === 'object' && item !== null && item !== undefined ?
                  <Row>
                    <Col md={12} lg={12} xs={12} sm={12}><hr/></Col>
                    <Col md={12} lg={12} xs={12} sm={12}>
                      <Row>
                        <Col md={6} lg={6} xs={12}>
                          <h5>Token Info </h5>
                            <p><span className="font-weight-bold">Token Contract Address: </span><a href={`https://etherscan.io/address/${this.state.address}`} target="_blank" rel="noopener noreferrer">{this.state.address}</a></p>
                            <p><span className="font-weight-bold">Token Name: </span><a href={`https://etherscan.io/token/${this.state.address}`} target="_blank" rel="noopener noreferrer">{item.tokenName}</a></p>
                            <p><span className="font-weight-bold">Token Symbol: </span>{item.symbol}</p>
                            <p><span className="font-weight-bold">Token Total Supply: </span>{item.totalSupply}</p>
                        </Col>
                        <Col md={6} lg={6} xs={12}>
                          <h5>Token Metadata </h5>
                          <p><span className="font-weight-bold">Item Id: </span><a href={`https://etherscan.io/token/${this.state.address}?a=${this.state.tokenId}`} target="_blank" rel="noopener noreferrer">{this.state.tokenId}</a></p>
                          <p><span className="font-weight-bold">Item Owner: </span><a href={`https://etherscan.io/address/${item.ownerOf}`} target="_blank" rel="noopener noreferrer">{item.ownerOf}</a></p>
                          <p><span className="font-weight-bold">Item Name: </span>{item.name}</p>
                          <p><span className="font-weight-bold">Item Description: </span>{item.item_description}</p>
                          <p><span className="font-weight-bold">Item Image: </span><a href={item.item_image} title={item.name} target="_blank" rel="noopener noreferrer">{item.item_image}</a></p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  :
                  <Row>
                    <Col md={12} lg={12} xs={12} sm={12}><hr/></Col>
                    <Col md={12} lg={12} xs={12}>
                        <h6>{item}</h6>
                    </Col>
                  </Row>
                  }
            </div>
          </div>
      </main>
    );
  }
}
const mapStateToProps = state => ({data: state.contracts.data, loading: state.contracts.loading})
const mapDispatchToProps = dispatch => bindActionCreators( { call, handleLoading }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Erc721)