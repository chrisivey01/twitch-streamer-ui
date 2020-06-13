import axios from "axios";

let myTwitchApi;
if(process.env.NODE_ENV === "development"){
    myTwitchApi = "http://localhost:3000/check-if-online/"
} else {
    myTwitchApi = "http://51.81.48.159:3000/check-if-online/"
}

export const getTwitchStreamers = () => {
    return axios.post(myTwitchApi);
}