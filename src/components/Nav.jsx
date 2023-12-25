import {Link} from 'react-router-dom'


export const NavList = () => {
   return(
    <div className='nav-block'>
      <h3>Навигация</h3>
      <Link style={{color: "green"}} to="/">Задачи</Link>
      <br />
      <Link style={{color: "green"}} to="/add">Добавить задачу</Link>
      <br />
      <Link style={{color: "green"}} to="/about">О проекте</Link>
    </div>
   )
}