import { useSelector } from 'react-redux'
import './App.scss'
import { RootState } from './redux/store'

import { bankrupt, decrease, increase } from './redux/slices/counterSlice'
import { useDispatch } from 'react-redux'

function App() {

  const count = useSelector((state: RootState)=> state.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increase(100))}>Deposit</button>
      <button onClick={()=> dispatch(decrease(100))}>Withdraw</button>
      <button onClick={()=> dispatch(bankrupt())}>Bankrupt</button>
    </div>
  )
}

export default App
