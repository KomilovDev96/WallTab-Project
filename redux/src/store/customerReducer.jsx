const defaultState = {
    customer: []
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return { ...state, customer: [...state.customer, action.payload] }
        case "REMOVE_CUSTOMER":
            return { ...state, customer: state.customer - action.payload }
        default:
            return state
    }
}
