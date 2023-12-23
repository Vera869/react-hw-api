import { useState } from "react";
import { postTodo } from "../api";


export function AddTodoForm({ setTodos }) {
  const [newTodoText, setNewTodoText] = useState("");
  const [isTodoLoading, setIsTodoLoading] = useState(false);

  const handleAddTodoClick = async () => {
    if (!newTodoText) {
      return;
    }
    setIsTodoLoading(true);
    const newTodos = await postTodo(newTodoText);

    setIsTodoLoading(false);

    setTodos(newTodos.todos);
    setNewTodoText("");
  };

  return (
    <div>
      <input
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <button disabled={isTodoLoading} onClick={handleAddTodoClick}>{isTodoLoading ? "Задача добавляется" : "Добавить задачу"}</button>
    </div>
  );
}
