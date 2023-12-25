import { useState } from "react";
import { deleteTodo} from "../api";
// import {Link} from 'react-router-dom'

export default function TodosPage({todos, setTodos, setcurrentTodo}) {

  
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

      <h1>Список задач</h1>
      <p style={{color: "red"}}>{addDeleteError}</p>
      <ul>
        {todos.map((todo) => {
          return <li onClick={() => setcurrentTodo(todo)} className="todo-item" key={todo.id}>{todo.text}<br></br>
          <button disabled={isDeleteLoading === todo.id} 
            onClick={() => DeleteItem({id: todo.id})}>
              { ( isTodoLoading && isDeleteLoading === todo.id) ?
               "Задача удаляется" : "Удалить" }</button>
          </li>;
        })}
      </ul>
    </div>
  );
}
