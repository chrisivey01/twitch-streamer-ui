import axios from "axios";

let myTwitchApi;
if(process.env.NODE_ENV === "development"){
    myTwitchApi = "http://localhost:3000/check-if-online/"
} else {
    myTwitchApi = "http://streamers.pmarp.com:3000/check-if-online/"
}

const ipUrl = "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"


export const getTwitchStreamers = () => {
    return axios.post(myTwitchApi);
}

export const getIpUrl = () => {
    return axios.post(ipUrl);
}