import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import { AddTodoPage } from "./pages/AddTodoPage";
import { AboutPage } from "./pages/AboutPage";

function AppRoutes({
  todos,
  setTodos,
  addGetTodosError,
  currentTodo,
  setcurrentTodo,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TodosPage
            todos={todos}
            setTodos={setTodos}
            addGetTodosError={addGetTodosError}
            setcurrentTodo={setcurrentTodo}
          ></TodosPage>
        }
      ></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route
        path="/add"
        element={
          <AddTodoPage
            todos={todos}
            setTodos={setTodos}
            addGetTodosError={addGetTodosError}
          ></AddTodoPage>
        }
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
