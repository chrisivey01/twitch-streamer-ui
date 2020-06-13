import { GET_TWITCH_STREAMERS } from "../actions/index";

const initialState = {
    twitchStreamers: [],
};

const twitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TWITCH_STREAMERS:
            return {
                ...state,
                twitchStreamers: action.twitchStreamers.data,
            };
        default:
            return state;
    }
};

export default twitchReducer;
