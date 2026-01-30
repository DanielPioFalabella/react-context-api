import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Homepage from "./pages/Homepage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import DettaglioProdottoSingolo from "./components/DettaglioProdottoSingolo";
import BudgetProvider from "./contexts/BudgetContext";


const App = () => {
 return (
   <>
   <BudgetProvider>
     <BrowserRouter>
       <Routes>
         <Route element={<DefaultLayout />}>
           <Route index element={<Homepage />} />
           <Route path="/chisiamo" element={<ChiSiamo />} />
           <Route path="/prodotti">
             <Route index element={<Prodotti />} />
             <Route path=":id" element={<DettaglioProdottoSingolo />} />
           </Route>
         </Route>
       </Routes>
     </BrowserRouter>
    </BudgetProvider>
   </>
 )
}


export default App
