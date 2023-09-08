import React from "react";
import HOC from "./HOC";

const UserList = ({ data }) => {
  //   const [users, setUsers] = useState([]);
  //   const [term, setTerm] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const Jsondata = await res.json();
  //       setUsers(Jsondata);
  //       console.log(Jsondata);
  //     };

  //     fetchData();
  //   }, []);

  let renderUsers = data?.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  //   let filteredUsers = users
  //     ?.filter(({ name }) => {
  //       return name.indexOf(term) >= 0;
  //     })
  //     .map((user) => {
  //       return (
  //         <div key={user.id}>
  //           <p>
  //             <strong>{user.name}</strong>
  //           </p>
  //         </div>
  //       );
  //     });

  return (
    <div>
      {/* <h1>Users</h1>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UserList, "users");

export default SearchUsers;
