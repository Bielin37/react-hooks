import React, { useReducer, useEffect, useState } from "react";

import "./App.css";
import UserBar from "./user/UserBar";
import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";
import appReducer from "./reducers";
import Header from "./Header";
import ChangeTheme from "./ChangeTheme";
import { ThemeContext, StateContext } from "./contexts";
/* import MyName from "./hooks-test/chapter1_1/chapter1_1";
import MyName2 from "./hooks-test/chapter1_2/chapter1_2"; */

export default function App() {
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral"
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: []
  });
  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = "React Hooks Blog";
    }
  }, [user]);

  useEffect(() => {
    fetch("api/posts")
      .then(result => result.json())
      .then(posts => dispatch({ type: "FETCH_POSTS", posts }));
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          <br />
          {user && <CreatePost />}
          <br />
          <hr />
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}
