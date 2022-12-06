import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  const articlePosts = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));
  return <main>{articlePosts}</main>;
  // return (
  //   <main>
  //     {posts.map((post) => {
  //       console.log(post, "ilk");
  //       return <Article key={post.id} post={post} />;
  //     })}
  //   </main>
  // );
};

export default ArticleList;
