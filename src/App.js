import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./Post";
import Navbar from "./Navbar";
import { CreatePost } from "./CreatePost";
import { UserId } from "./UserId";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/post" element={<Post />}></Route>
                <Route exact path="/CreatePost" element={<CreatePost />}></Route>
                <Route exact path="/post/:id" element={<UserId />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
