import React from "react";

const Article = ({ post }) => {
  const { date = "January 1, 1970", minutes, preview, title } = post;

  return (
    <article>
      <h3>{title}</h3>
      {/*<small>{date ? date : "January 1, 1970"}</small>*/}
      {/*<small>{date || "January 1, 1970"}</small>*/}
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
