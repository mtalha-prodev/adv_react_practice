import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchDataOne() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [btnClick, setBtnClick] = useState(1);

  const clickHandle = () => {
    setBtnClick(id);
  };

  const dataFetch = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${btnClick}`
      );

      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   dataFetch();
  // }, [id]);

  useEffect(() => {
    dataFetch();
  }, [btnClick]);

  return (
    <div>
      <h1>{posts.id}</h1>
      <h1>{posts.title}</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={clickHandle}>
        Add Data
      </button>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default FetchDataOne;
