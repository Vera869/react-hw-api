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
  const [isTodoLoading, setIsTodoLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState();
  const DeleteItem = async ({id}) => {
    setIsDeleteLoading(id);
    setIsTodoLoading(true);
    const newTodos = await deleteTodo({id});
    setIsTodoLoading(false);

    setTodos(newTodos.todos);
  }

  return (
    <div className="page">
      <h1>Список задач</h1>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}<br></br>
          <button disabled={isDeleteLoading === todo.id} onClick={() => DeleteItem({id: todo.id})}>{ ( isTodoLoading && isDeleteLoading === todo.id) ? "Задача удаляется" : "Удалить" }</button>
          </li>;
        })}
      </ul>

      <AddTodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}
