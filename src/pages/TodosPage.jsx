import { useState } from "react";
import { AddTodoForm } from "../components/AddTodoForm";

export default function TodosPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Хлеб" },
    { id: 2, text: "Молоко" },
    { id: 3, text: "Сок" },
  ]);

  const deleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }
  return (
    <div className="page">
      <h1>Список задач</h1>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}<br></br>
          <button onClick={() => deleteItem(todo.id)}>Удалить</button>
          </li>;
        })}
      </ul>

      <AddTodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}
