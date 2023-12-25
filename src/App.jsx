import AppRoutes from "./AppRoutes";
import { useEffect, useState } from "react";
import {getTodos} from './api'

function App() {
  const [todos, setTodos] = useState([]);
  const [addGetTodosError, setAddGetTodosError] = useState(null);

  useEffect(() => {
     getTodos().then((todos) => {
     setTodos(todos.todos);
    }).catch((error) => {
      setAddGetTodosError(error.message);
      setTodos([]);
    })
  },[])
  return <AppRoutes todos={todos} setTodos={setTodos} addGetTodosError={addGetTodosError}></AppRoutes>;
}

export default App;
