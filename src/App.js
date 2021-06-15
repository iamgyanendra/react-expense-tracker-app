import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import {IncomeExp} from './components/IncomeExp';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import { GlobalProvider } from './components/context/GlobalState';
import './App.css'

function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExp/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
