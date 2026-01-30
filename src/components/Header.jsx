import { NavLink } from "react-router-dom"


const Header = () => {
   return (
       <nav className="navbar">
           <ul>
               <li><NavLink to="/">Home Page</NavLink></li>
               <li><NavLink to="/chisiamo">Chi siamo</NavLink></li>
               <li><NavLink to="/prodotti">Prodotti</NavLink></li>
           </ul>
       </nav>
   )
}


export default Header
