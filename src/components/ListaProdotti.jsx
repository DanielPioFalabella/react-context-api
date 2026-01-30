import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


const ListaProdotti = () => {
   const endpoint = "https://fakestoreapi.com/products";
   const [prodotti, setProdotti] = useState([]);


   // chiamata axios
   useEffect(() => {
       axios.get(endpoint)
           .then(res => { setProdotti(res.data) })
           .catch(err => { console.log(err) })
   }, [])


   return (
       <>
           <div className="container-prodotto">
               {prodotti.map((prodotto) => (
                   <Link
                       key={prodotto.id}
                       to={`/prodotti/${prodotto.id}`}
                       className="card-prodotto"
                   >
                       <h3>{prodotto.title}</h3>
                       <img src={prodotto.image} alt={prodotto.title} />
                       <p className="prezzo-prodotto">€ {prodotto.price}</p>
                       {/* <p>{prodotto.description}</p>
                       <p>{prodotto.category}</p> */}
                   </Link>
               ))}
           </div >
       </>
   )
}


export default ListaProdotti