import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { fetchCustomer } from './asynAction/customer'


const App = () => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customer)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    console.log(name)
    const cutomer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(cutomer))
  }

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id))
  }

  return (
    <>
      <h1><i>{cash}</i></h1>
      <h2>Uydagi schet summasi</h2>

      <button onClick={() => addCash(5)}> puldan toldirish</button>
      <button onClick={() => getCash(5)}> puldan ayirish</button>
      <button onClick={() => addCustomer(prompt("Isim yozing"))}>Yangi foydalanuchini qo'shish</button>
      <button onClick={() => removeCustomer()}>o'chirish</button>
      <button onClick={() => dispatch(fetchCustomer())}>Hamma malumotlarni chiqarish</button>

      <div style={{
        border: "1px solid red",
        height: "600px",
        width: "1000px",
        margin: "50px auto"
      }}>
        {customers.length > 0
          ?
          <div>
            {customers.map((item, index) => (
              <div style={{ border: "1px solid red", height: "100px", width: "100px", }} key={index}>
                <h4>{item.id}</h4>
                <h2>{item.name}</h2>
                <button onClick={() => removeCustomer(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          :
          <div>
            Hech nima yo'q
          </div>
        }
      </div>
    </>
  )
}
export default App 