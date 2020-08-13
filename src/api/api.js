import axios from "axios";

let myTwitchUrl;
let whitelistUrl;
if (process.env.NODE_ENV === "development") {
    myTwitchUrl = "http://localhost:3000/check-if-online/";
    whitelistUrl = "http://localhost:3000/submit-ip/";
} else {
    myTwitchUrl = "http://74.91.121.127:3002/check-if-online/";
    whitelistUrl = "http://74.91.121.127:3002/submit-ip/";
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
