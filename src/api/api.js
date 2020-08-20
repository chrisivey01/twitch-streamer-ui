import axios from "axios";

let myTwitchUrl;
let whitelistUrl;
let mainUrl;
let discordUrl;
if (process.env.NODE_ENV === "development") {
    myTwitchUrl = "http://localhost:3002/check-if-online/";
    whitelistUrl = "http://localhost:3003/ip/";
    mainUrl = "https://localhost:3001";
    discordUrl = "https://localhost:3001"
} else {
    myTwitchUrl = "http://pmarp.com:3002/check-if-online/";
    whitelistUrl = "http://pmarp.com:3003/ip/";
    mainUrl = "https://localhost:3001";
    discordUrl = "https://localhost:3001"
}

const ipUrl =
    "https://api.ipify.org?format=json";

export const getTwitchStreamers = () => {
    return axios.post(myTwitchUrl);
};

export const getIpUrl = () => {
    return axios.get(ipUrl);
};

export const setWhitelist = (ip) => {
    return axios.post(whitelistUrl, {'ip':ip});
};

export const main = () => {
    return axios.post(mainUrl)
}

export const discord = () => {
    return axios.post(discordUrl)
}