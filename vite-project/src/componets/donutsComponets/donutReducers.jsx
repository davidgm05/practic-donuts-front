import { GET_DONUT_BY_ID, LOAD_DONUTS } from "./donutsActions"

const initialState = {
    donuts: [],
    donutId: undefined
}

const donutsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DONUTS:
            return {
                ...state,
                donuts: action.payload.donuts,
            }
        case GET_DONUT_BY_ID:
            return {
                ...state,
                donutId: action.payload.donutId,
            }
        default:
            return state
    }
}

export default donutsReducer