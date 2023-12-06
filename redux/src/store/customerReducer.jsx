const defaultState = {
    customer: []
}
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER"
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMER:
            return { ...state, customer: [...state.customer, ...action.payload] }
        case ADD_CUSTOMER:
            return { ...state, customer: [...state.customer, action.payload] }
        case REMOVE_CUSTOMER:
            return { ...state, customer: state.customer.filter(cutomer => cutomer.id !== action.payload) }
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })
export const manyCustomerAction = (payload) => ({ type: ADD_MANY_CUSTOMER, payload })
