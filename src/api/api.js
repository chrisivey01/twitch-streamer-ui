import axios from "axios";

const myTwitchApi = "http://localhost:3000/check-if-online/"

export const getTwitchStreamers = () => {
    return axios.post(myTwitchApi);
}