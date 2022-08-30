import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import './App.scss'
import { actionCreators, State } from './state';

function App() {

  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney, bankruptMoney} = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State)=>state.bank)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  )
}

export default App
