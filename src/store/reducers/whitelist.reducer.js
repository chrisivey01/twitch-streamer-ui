import { GET_IP } from "../actions/whitelist.actions";

const initialState = {
    ipDetails:{}
}

const whiteListReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_IP:
            return {
                ...state,
                ipDetails: action.payload
            }
        default: 
            return state;
    }
}

export default whiteListReducer;