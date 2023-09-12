import React from "react";

const Slowposts = ({ index }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 5) {}

  return <li> Posts: #{index + 1}</li>;
};

const Posts = () => {
  console.log("[Artificially Slow] Rendering 500 <SlowPost/>");

  let items = [];

  for (let i = 0; i < 250; i++) {
    items.push(<Slowposts key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
};

export default Posts;
