import axios from "axios";

let myTwitchUrl;
let whitelistUrl;
// if (process.env.NODE_ENV === "development") {
myTwitchUrl = "http://127.0.0.1:3002/check-if-online/";
whitelistUrl = "http://127.0.0.1:3003/ip/";
// } else {
//     myTwitchUrl = "http://pmarp.com:3002/check-if-online/";
//     whitelistUrl = "http://pmarp.com:3003/ip/";
// }

const ipUrl = "https://api.ipify.org?format=json";

export const getTwitchStreamers = () => {
    return axios.post(myTwitchUrl);
};

export const getIpUrl = () => {
    return axios.get(ipUrl);
};

export const setWhitelist = (ip) => {
    return axios.post(whitelistUrl, { ip: ip });
};
