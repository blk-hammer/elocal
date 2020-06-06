export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SELLER":
      return action.payload;
    default:
      return state;
  }
};
