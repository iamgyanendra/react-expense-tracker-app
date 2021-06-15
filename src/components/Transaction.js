import React, {useContext} from 'react';
import { GlobalContext } from './context/GlobalState';


export const Transaction = ({transactions}) => {
    //const {transactions} = useContext(GlobalContext)

    const {deleteTransaction}=useContext(GlobalContext);

    const sign = transactions.amt < 0 ? '-' : '+';


    return (
        <li className={transactions.amt < 0 ? 'minus' : 'plus'}>
            {transactions.text} <span >{sign} &#8377; {Math.abs(transactions.amt)}</span><button
            onClick={()=> deleteTransaction(transactions.id)} className="delete-btn">x</button>
        </li>
    )
}
