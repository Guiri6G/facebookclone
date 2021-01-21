import {INCREMENT_COUNTER} from '../actions/counter'

const  initialState = {
    counterValue:0
}

export default (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                ...state,
                counterValue: state.counter + 1
            }
            default:
                return state
    }
}