import "./App.css";
import TodoList from "./ToDoList";
import ToDoAdder from "./ToDoAdder";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  const nameDate = (nameAndDate) => {
    nameAndDate.id = v4();
    setTodo(nameAndDate);
    setTodos([...todos, nameAndDate]);
    setTodo({ todo });
  };

  return (
    <div className="App">
      <h1 className="text-blue-700 text-3xl font-bold">Pheonix To-Do List</h1>
      <ToDoAdder nameDate={nameDate} />
      <TodoList toDoItems={todos} setToDoItems={setTodos} />
    </div>
  );
}

export default App;
