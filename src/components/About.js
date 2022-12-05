import React from "react";

const About = (props) => {
  const { image = "https://via.placeholder.com/215", about } = props;
  return (
    <aside>
      {/*<img src={img ? img : "https://via.placeholder.com/215"} alt="" />*/}
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
