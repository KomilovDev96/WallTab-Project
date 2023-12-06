import { manyCustomerAction } from "../store/customerReducer"

export const fetchCustomer = () => {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data => data.json())
            .then(data => dispatch(manyCustomerAction(data)))
    }
}