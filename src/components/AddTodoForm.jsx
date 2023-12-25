import { useState } from "react";
import { postTodo } from "../api";

export function AddTodoForm({ setTodos }) {
  const [newTodoText, setNewTodoText] = useState("");
  const [isTodoLoading, setIsTodoLoading] = useState(false);
  const [addTodoError, setAddTodoError] = useState(null);

  const handleAddTodoClick = async () => {
    try {
      if (!newTodoText) {
        return;
      }
      setIsTodoLoading(true);
      const newTodos = await postTodo(newTodoText);
      setTodos(newTodos.todos);
      setNewTodoText("");
    } catch (error) {
      setAddTodoError(error.message);
    } finally {
      setIsTodoLoading(false);
    }
  };
  return (
    <div>
      <input
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <p style={{ color: "red" }}>{addTodoError}</p>
      <button disabled={isTodoLoading} onClick={handleAddTodoClick}>
        {isTodoLoading ? "Задача добавляется" : "Добавить задачу"}
      </button>
    </div>
  );
}
