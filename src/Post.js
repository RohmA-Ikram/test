import React, { useState, useEffect } from "react";
import "./App.css";

import { Link } from "react-router-dom";

export const Post = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState([]);
  const getPost = async () => {
    const response = await fetch(url);
    const post = await response.json();
    setPost(post);
    //console.log(post);
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Posts</h2>
      <ul style={{ listStyle: "none" }} className="posts">
        {post.map((p) => {
          const { id, title, body, userId } = p;
          return (
            <div>
              <li className="list" key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
                <h4>userId: {userId}</h4>
                <Link to={`/post/${p.id}`}>Learn more</Link>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
