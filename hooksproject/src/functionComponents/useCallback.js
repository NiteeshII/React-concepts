import React, { useState, useCallback } from "react";
import Search from "../components/Search";

const allUsers = ["john", "alex", "george", "simon", "james"];
const UseCallback = () => {
  const [users, setUsers] = useState(allUsers);

  const shuffle = useCallback((users) => {
    const shuffledUsers = [...users]; // Create a copy of the original array

    for (let i = shuffledUsers.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)); // Use i + 1 to include the last element
      // Swap elements using a temporary variable
      const temp = shuffledUsers[i];
      shuffledUsers[i] = shuffledUsers[randomIndex];
      shuffledUsers[randomIndex] = temp;
    }

    return shuffledUsers;
  }, []);

  const handleChange = useCallback(
    (text) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <>
      <div style={{ display: "inline-flex", margin: "1rem", gap: "20px" }}>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleChange} />
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {users.map((each, i) => (
          <ul key={each}>
            <li key={each} style={{ margin: 0, padding: 0 }}>
              {each}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default UseCallback;
