import axios from "axios";
import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  posts: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULY":
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        posts: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

function DataFetchTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      dispatch({ type: "FETCH_SUCCESSFULY", payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: "FETCH_ERROR", payload: "somthing is wrong !" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.posts.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchTwo;
