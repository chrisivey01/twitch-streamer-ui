import { GET_IP } from "../actions/whitelist.actions";

const initialState = {
    ip:''
}

const whiteListReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_IP:
            return {
                ...state,
                ip: action.ip.data.IPv4
            }
        default: 
            return state;
    }
}

export default whiteListReducer;