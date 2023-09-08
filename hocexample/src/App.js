import "./App.css";
import SearchTodos from "./components/TodoList";
import SearchUsers from "./components/UserList";

function App() {
  return (
    <div className="App">
      <SearchUsers />
      <SearchTodos />
    </div>
  );
}

export default App;
