import React, { useContext } from 'react'
import "../App.css";
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.reduce((acc, item) => (acc += item.amount > 0 ? item.amount : 0), 0);
  const expense = transactions.reduce((acc, item) => (acc += item.amount < 0 ? item.amount : 0), 0);

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className='money minus'>-${expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses