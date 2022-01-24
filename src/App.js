import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Post } from "./Post";
import Navbar from "./Navbar";
import { CreatePost } from "./CreatePost";
import { UserId } from "./UserId";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/post" component={Post} />
        <Route exact path="/CreatePost" component={CreatePost} />
        <Route exact path="/post/:id" children={UserId} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
