import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => {
        console.log(post, "ilk");
        return <Article key={post.id} post={post} />;
      })}
    </main>
  );
};

export default ArticleList;
