import React, { useEffect, useState } from "react";

const UseEffecthook = () => {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);
  const [windowsize, setWindowSize] = useState(window.innerWidth);

  const handleresize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("onMount");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    window.addEventListener("resize", handleresize);

    return () => {
      console.log("unmount");
      window.removeEventListener("resize", handleresize);
    };
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{windowsize}</h1>
      {items?.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default UseEffecthook;
