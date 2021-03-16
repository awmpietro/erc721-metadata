import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { call, handleLoading } from "../../redux/actions";
import { validURL } from "../../utils";
import Spin from "../../components/Spin";

class Erc721 extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showMetadata = this.showMetadata.bind(this);
    this.checkUrl = this.checkUrl.bind(this);
    this.state = { address: "", tokenId: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.call(this.state.address, this.state.tokenId);
  }

  showMetadata = item => {
    const metadata = item.metadata;
    if (typeof metadata === "object" && metadata !== null) {
      const keys = Object.keys(metadata);
      const data = [];
      keys.forEach((key, index) => {
        return data.push(
          <p>
            <span className="font-weight-bold">{`${key}: `}</span>
            {this.checkUrl(metadata[key])}
          </p>
        );
      });
      return data;
    }
    return this.checkUrl(item.metadata);
  };

  checkUrl = str => {
    if (validURL(str)) {
      return (
        <a href={str} target="_blank" rel="noopener noreferrer">
          {str}
        </a>
      );
    }
    return str;
  };

  render() {
    if (this.props.loading) {
      return <Spin />;
    }
    const item = this.props.data;
    return (
      <>
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
                          <input
                            name=""
                            placeholder="Contract Address *"
                            type="text"
                            className="form-control"
                            value={this.state.address}
                            onChange={e =>
                              this.setState({ address: e.target.value })
                            }
                            required
                          />
                        </div>
                      </Col>
                      <Col md={6} lg={6} xs={12} sm={12}>
                        <div className="form-group">
                          <input
                            name=""
                            placeholder="Token Id *"
                            type="text"
                            className="form-control"
                            value={this.state.tokenId}
                            onChange={e =>
                              this.setState({ tokenId: e.target.value })
                            }
                            required
                          />
                        </div>
                      </Col>
                      <Col md={12} lg={12} xs={12} sm={12}>
                        <hr />
                      </Col>
                      <Col md={12} lg={12} xs={12} sm={12}>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary">
                            Send
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
              {typeof item === "object" &&
              item !== null &&
              item !== undefined ? (
                <Row>
                  <Col md={12} lg={12} xs={12} sm={12}>
                    <hr />
                  </Col>
                  <Col md={12} lg={12} xs={12} sm={12}>
                    <Row>
                      <Col md={6} lg={6} xs={12}>
                        <h5>ERC721 info </h5>
                        <p>
                          <span className="font-weight-bold">
                            Token Contract Address:{" "}
                          </span>
                          <a
                            href={`https://etherscan.io/address/${this.state.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {this.state.address}
                          </a>
                        </p>
                        <p>
                          <span className="font-weight-bold">Token Name: </span>
                          <a
                            href={`https://etherscan.io/token/${this.state.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.tokenName
                              ? item.tokenName
                              : "No information provided"}
                          </a>
                        </p>
                        <p>
                          <span className="font-weight-bold">
                            Token Symbol:{" "}
                          </span>
                          {item.symbol
                            ? item.symbol
                            : "No information provided"}
                        </p>
                        <p>
                          <span className="font-weight-bold">
                            Token Total Supply:{" "}
                          </span>
                          {item.totalSupply
                            ? item.totalSupply
                            : "No information provided"}
                        </p>
                      </Col>
                      <Col md={6} lg={6} xs={12}>
                        <h5>Token info </h5>
                        <p>
                          <span className="font-weight-bold">Item Id: </span>
                          <a
                            href={`https://etherscan.io/token/${this.state.address}?a=${this.state.tokenId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {this.state.tokenId}
                          </a>
                        </p>
                        <p>
                          <span className="font-weight-bold">Item Owner: </span>
                          <a
                            href={`https://etherscan.io/address/${item.ownerOf}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.ownerOf
                              ? item.ownerOf
                              : "No information provided"}
                          </a>
                        </p>
                        <hr />
                        <h5>Token metadata</h5>
                        {this.showMetadata(item)}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col md={12} lg={12} xs={12} sm={12}>
                    <hr />
                  </Col>
                  <Col md={12} lg={12} xs={12}>
                    <h6>{item}</h6>
                  </Col>
                </Row>
              )}
            </div>
          </div>
        </main>
        <footer style={footerStyle}>
          <div>
            <span className="text-muted">
              By{" "}
              <a
                href="https://github.com/awmpietro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arthur Mastropietro
              </a>
            </span>
          </div>
        </footer>
      </>
    );
  }
}
const mapStateToProps = state => ({
  data: state.contracts.data,
  loading: state.contracts.loading,
});

const footerStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "60px",
  textAlign: "center",
  lineHeight: "60px",
  backgroundColor: "#f5f5f5",
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ call, handleLoading }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Erc721);
