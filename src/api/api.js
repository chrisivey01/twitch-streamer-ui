import axios from "axios";

let myTwitchApi;
if(process.env.NODE_ENV === "development"){
    myTwitchApi = "http://localhost:3000/check-if-online/"
} else {
    myTwitchApi = "https://streamers.pmarp.com:3000/check-if-online/"
}

export const getTwitchStreamers = () => {
    return axios.post(myTwitchApi);
}