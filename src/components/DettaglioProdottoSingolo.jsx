import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const DettaglioProdottoSingolo = () => {
   // definisco l'id associandolo al prodotto
   const { id } = useParams();
   const [prodotto, setProdotto] = useState()


   const endpoint = "https://fakestoreapi.com/products/";


   useEffect(() => {
       axios.get(endpoint + id)
           .then(res => setProdotto(res.data))
           .catch(err => console.log(err, "c'è un errore"))
   }, [id])


   if (!prodotto) {
       return (
           <p>Caricamento...</p>
       )
   }


   return (
       <>
           <div className="container-prodotto-singolo">
               <h3 className="titolo-prodotto">{prodotto.title}</h3>
               <img src={prodotto.image} alt={prodotto.title} />
               <p className="prezzo-prodotto">€ {prodotto.price}</p>
               <p className="description-prodotto">{prodotto.description}</p>
               <p className="categoria-prodotto">{prodotto.category}</p>


               <button className="btn-prodotto-singolo">
               <Link to="/prodotti">Torna alla pagina prodotti</Link>
               </button>
           </div>
       </>
   )
}


export default DettaglioProdottoSingolo
