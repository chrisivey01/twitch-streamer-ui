import { combineReducers } from "redux";
import twitchReducer from "./reducers/twitch.reducer";
import whiteListReducer from "./reducers/whitelist.reducer";

export default combineReducers({
    twitchReducer,
    whitelist:whiteListReducer
})
