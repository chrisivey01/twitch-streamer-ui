export const SET_TWITCH_STREAMERS = "SET_TWITCH_STREAMERS";
export const GET_TWITCH_STREAMERS = "GET_TWITCH_STREAMERS";

export const setTwitchStreamers = data => {
    return { type: SET_TWITCH_STREAMERS, twitchStreamers: data}
}

export const getTwitchStreamers = data => {
    return { type: GET_TWITCH_STREAMERS, twitchStreamers: data}
}