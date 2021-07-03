import axios from "axios";
import { GET_INTERFACE, CALL, LOADING } from "./actionTypes";
import { errorHandler } from "../utils";

export const getInterface = (data) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_URL}/contracts/getInterface`)
      .then((response) => {
        dispatch({ type: GET_INTERFACE, payload: { itf: response.data } });
      })
      .catch((error) => {});
  };
};

export const call = (address, tokenId, network) => {
  return async (dispatch) => {
    try {
      handleLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/contracts/call`,
        {
          contractAddress: address,
          funcName: "tokenURI",
          tokenId: tokenId,
          network,
        }
      );
      const data = {};
      try {
        data.metadata = JSON.parse(response.data.metadata);
      } catch (error) {
        data.metadata = response.data.metadata;
      }

      data.tokenName = response.data.name;
      data.symbol = response.data.symbol;
      data.totalSupply = response.data.totalSupply;
      data.ownerOf = response.data.ownerOf;

      dispatch({ type: CALL, payload: { data: data, loading: false } });
    } catch (error) {
      dispatch({
        type: CALL,
        payload: { data: errorHandler(error) },
      });
    }
  };
};

export const handleLoading = (isLoading) => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: { loading: isLoading } });
  };
};
