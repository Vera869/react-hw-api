import {Link} from 'react-router-dom';


export function AboutPage() {
   return (
      <div className="page">
         <div className="current-task">Текущая задача:</div>
         <h1>О проекте</h1>
         <h2>Навигация</h2>
         <Link style={{color: "green"}} to="/">Задачи</Link>
         <br />
         <Link style={{color: "green"}} to="/add">Добавить задачу</Link>
         <br />
         <Link style={{color: "green"}} to="/about">О проекте</Link>
         <br />
    </div>
   )
}