import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amt: -20 },
        { id: 2, text: 'Salary', amt: 300 },
        { id: 3, text: 'Book', amt: -10 },
        { id: 4, text: 'Camera', amt: 150 }
    ]
} 

//creating context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({children}) => {

    const [state, dispatch]= useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}>
            
            {children}
        </GlobalContext.Provider>
    )

}