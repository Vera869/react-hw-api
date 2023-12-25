import {AddTodoForm} from '../components/AddTodoForm'
import {Link} from 'react-router-dom';

export function AddTodoPage({setTodos, addGetTodosError}) {
   return (
    <div className="page">
      <div className="current-task">Текущая задача:</div>
      <h2>Навигация</h2>
      <Link style={{color: "green"}} to="/">Задачи</Link>
      <br />
      <Link style={{color: "green"}} to="/add">Добавить задачу</Link>
      <br />
      <Link style={{color: "green"}} to="/about">О проекте</Link>
      <br />
      <h1>Страница добавления Задачи</h1>
      <p style={{color: "red"}}>{addGetTodosError}</p>
      <AddTodoForm setTodos={setTodos} />
    </div>
   )
}