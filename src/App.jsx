import './App.css';
import Header from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
