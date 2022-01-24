import React, { useState } from "react";
//import { url } from "./Post";
import { Link, useParams } from "react-router-dom";

export const UserId = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [allPost, setpost] = useState([]);
  const getpost = async () => {
    const response = await fetch(url);
    const res = await response.json();
    setpost(res);
  };
  //console.log(post);

  //   useEffect(() => {
  //     getpost();
  // },[]);
  const { id } = useParams();
  const newId = allPost.find((i) => i.id === parseInt(id));
  console.log(newId);
  //console.log(allPost);
  return (
    <div>
      <Link to="/post">Go to post</Link>
      {/* <button onClick={() => alert(id)}>go back to post</button> */}
    </div>
  );
};
