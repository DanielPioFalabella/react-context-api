import { createContext, useState } from "react";

export const BudgetContext = createContext();

// creo un provider
const BudgetProvider = ({children}) => {
    // creo una variabile di stato per avere un budget da selezionare in pagina
    const [budgetMode, setBudgetMode] = useState(false)

    // valore che passerò 
    const valueBudget = {
        budgetMode, setBudgetMode
    }

    return (
        <BudgetContext.Provider value={valueBudget}>
            {children}
        </BudgetContext.Provider>
    )
}

export default BudgetProvider