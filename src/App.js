import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  return (
    <div className="App">
      <div>Todo</div>
      <input onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button
        onClick={() => {
          setTodos((prevList) => {
            return [...prevList, todo];
          });
        }}
      >
        Add Todo
      </button>
      <div>
        {todos.map((t) => {
          return <div>{t}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
