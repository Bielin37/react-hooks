import React, { Fragment, useContext } from "react";

import Post from "./Post";
import { StateContext } from "../contexts";

export default function PostList() {
  const { state } = useContext(StateContext);
  const { posts } = state;

  return (
    <div>
      {posts.map((p, i) => (
        <Fragment key={"post-" + i}>
          <Post {...p} />
          <hr />
        </Fragment>
      ))}
    </div>
  );
}
