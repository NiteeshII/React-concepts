import React, { useState, useTransition } from "react";
import Posts from "../components/Posts";
import TabButton from "../components/TabButton";
import About from "../components/About";
import Contact from "../components/Contact";

const Usetransition = () => {
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();

  const handleClick = (tab) => {
    startTransition(() => setTab(tab));
  };

  //   if (isPending) return <p>Loading...</p>;

  return (
    <div>
      <div onClick={(e) => handleClick(e.target.value)}>
        <TabButton value="Posts">Posts</TabButton>
        <TabButton value="about">about</TabButton>
        <TabButton value="contact">comment</TabButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0.5rem",
          fontWeight: 700,
        }}
      >
        {isPending ? (
          <p>Loading...</p>
        ) : (
          <>
            {tab === "Posts" && <Posts />}
            {tab === "about" && <About />}
            {tab === "contact" && <Contact />}
          </>
        )}
      </div>
    </div>
  );
};

export default Usetransition;
