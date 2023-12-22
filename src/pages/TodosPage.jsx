import { useEffect, useState } from "react";
import { AddTodoForm } from "../components/AddTodoForm";
import { deleteTodo, getTodos } from "../api";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
     getTodos().then((todos) => {
     setTodos(todos.todos);
    });
  },[])

  const DeleteItem = async (id) => {
    
    const newTodos = await deleteTodo(id);
    setTodos(newTodos.todos);
  }

  return (
    <div className="page">
      <h1>Список задач</h1>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}<br></br>
          <button onClick={() => DeleteItem({id: todo.id})}>Удалить</button>
          </li>;
        })}
      </ul>

      <AddTodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}
