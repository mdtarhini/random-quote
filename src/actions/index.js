import quoter from "../api/quoter";
export const fetchQuote = () => {
  return async (dispatch) => {
    const response = await quoter.get("/quotes/random");
    dispatch({ type: "FETCH_QUOTE", payload: response.data });
  };
};
