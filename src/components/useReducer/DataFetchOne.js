import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchOne() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState({});
  const [error, setError] = useState("");
  // data fetch function

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setLoading(false);
      setPosts(res.data);
      setError("");
    } catch (error) {
      setLoading(false);
      setPosts({});
      setError("Somthing is wrong !");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? "Loading..." : posts.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchOne;
