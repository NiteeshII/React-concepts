import React, { useEffect, useState } from "react";

const HOC = (WrappedComponent, entitiy) => {
  const HocWrap = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entitiy}`
        );
        const Jsondata = await res.json();
        entitiy === "todos"
          ? setData(Jsondata.slice(0, 10))
          : setData(Jsondata);
        console.log(Jsondata);
      };

      fetchData();
    }, []);

    let filteredUsers = data?.filter((d) => {
      if (entitiy === "users") {
        const { name } = d;
        return name.indexOf(term) >= 0;
      }

      if (entitiy === "todos") {
        const { title } = d;
        return title.indexOf(term) >= 0;
      }
    });

    return (
      <div>
        <h1>{entitiy}</h1>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComponent data={filteredUsers} />
      </div>
    );
  };

  return HocWrap;
};

export default HOC;
