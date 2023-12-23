import { useEffect, useState } from "react";
import { AddTodoForm } from "../components/AddTodoForm";
import { deleteTodo, getTodos } from "../api";

export default function TodosPage() {
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
  const [isTodoLoading, setIsTodoLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState();
  const [addDeleteError, setAddDeleteError] = useState(null);

  const DeleteItem = async ({id}) => {
    try{
      setIsDeleteLoading(id);
      setIsTodoLoading(true);
      const newTodos = await deleteTodo({id});
      setTodos(newTodos.todos);
    } catch (error) {
      setAddDeleteError(error.message)
    } finally {
      setIsTodoLoading(false);
    }
  }

  return (
    <div className="page">
      <p style={{color: "red"}}>{addGetTodosError}</p>
      <h1>Список задач</h1>
      <p style={{color: "red"}}>{addDeleteError}</p>
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
