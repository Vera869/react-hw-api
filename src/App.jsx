import AppRoutes from "./AppRoutes";
import { useEffect, useState } from "react";
import { getTodos } from "./api";
import { NavList } from "./components/Nav";

function App() {
  const [todos, setTodos] = useState([]);
  const [addGetTodosError, setAddGetTodosError] = useState(null);

  const [currentTodo, setcurrentTodo] = useState(null);
  useEffect(() => {
    getTodos()
      .then((todos) => {
        setTodos(todos.todos);
      })
      .catch((error) => {
        setAddGetTodosError(error.message);
        setTodos([]);
      });
  }, []);
  return (
    <>
      {currentTodo ? (
        <div className="current-task">Текущая задача: {currentTodo.text}</div>
      ) : null}
      <NavList />
      <AppRoutes
        todos={todos}
        setTodos={setTodos}
        addGetTodosError={addGetTodosError}
        currentTodo={currentTodo}
        setcurrentTodo={setcurrentTodo}
      ></AppRoutes>
      ;
    </>
  );
}

export default App;
