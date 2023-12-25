import { AddTodoForm } from "../components/AddTodoForm";
import { Link } from "react-router-dom";

export function AddTodoPage({ setTodos, addGetTodosError }) {
  return (
    <div className="page">
      <h1>Страница добавления Задачи</h1>
      <p style={{ color: "red" }}>{addGetTodosError}</p>
      <AddTodoForm setTodos={setTodos} />
    </div>
  );
}
