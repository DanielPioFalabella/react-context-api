import { NavLink } from "react-router-dom"
import { useContext } from "react" 
import { BudgetContext } from "../contexts/BudgetContext"


const Navbar = () => {
    const {budgetMode, setBudgetMode} = useContext(BudgetContext)

   return (
       <nav className="navbar">
           <ul>
               <li><NavLink to="/">Home Page</NavLink></li>
               <li><NavLink to="/chisiamo">Chi siamo</NavLink></li>
               <li><NavLink to="/prodotti">Prodotti</NavLink></li>
           </ul>
           <button className="btn-budget-mode" onClick={() => (setBudgetMode(!budgetMode))}>
            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
       </nav>
   )
}


export default Navbar