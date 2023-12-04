import { useDispatch, useSelector } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  return (
    <>
      <h1><i>{cash}</i></h1>
      <h2>Uydagi schet summasi</h2>

      <button onClick={() => addCash(5)}> puldan toldirish</button>
      <button onClick={() => getCash(5)}> puldan ayirish</button>
    </>
  )
}
export default App 