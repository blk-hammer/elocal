import axios from "axios";

export const fetchProduct = () => async (dispatch /*, getState */) => {
  const response = await axios.get(
    "http://35.225.50.138:9091/productDetail?sellerId=12&productId=9&variantId=6"
  );

  // Return an action
  dispatch({
    type: "FETCH_PRODUCT",
    payload: response.data,
  });
};

export const fetchSeller = () => async (dispatch) => {
  const response = await axios.get(
    "http://35.225.50.138:9091/otherSellers?productId=9&variantId=6"
  );

  dispatch({
    type: "FETCH_SELLER",
    payload: response.data,
  });
};
