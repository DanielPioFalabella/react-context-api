import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react"
import { BudgetContext } from "../contexts/BudgetContext"


const ListaProdotti = () => {
   const endpoint = "https://fakestoreapi.com/products";
   const [prodotti, setProdotti] = useState([]);


   // chiamata axios
   useEffect(() => {
       axios.get(endpoint)
           .then(res => { setProdotti(res.data) })
           .catch(err => { console.log(err) })
   }, [])

   const {budgetMode} = useContext(BudgetContext)
    // mi creo una variabile che mi permette di mostrare solo i prodotti che costano meno di 30 euro
    const budgetModeBase = budgetMode ? prodotti.filter(prodotto => prodotto.price <= 30) : prodotti

   return (
       <>
           <div className="container-prodotto">
               {budgetModeBase.map((prodotto) => (
                   <Link
                       key={prodotto.id}
                       to={`/prodotti/${prodotto.id}`}
                       className="card-prodotto"
                   >
                       <h3>{prodotto.title}</h3>
                       <img src={prodotto.image} alt={prodotto.title} />
                       <p className="prezzo-prodotto">€ {Number(prodotto.price)}</p>
                       {/* <p>{prodotto.description}</p>
                       <p>{prodotto.category}</p> */}
                   </Link>
               ))}
           </div >
       </>
   )
}


export default ListaProdotti