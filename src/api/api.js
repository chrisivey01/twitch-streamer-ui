import axios from "axios";

let myTwitchUrl;
let whitelistUrl;
if (process.env.NODE_ENV === "development") {
    myTwitchUrl = "http://localhost:3000/check-if-online/";
    whitelistUrl = "http://localhost:3000/submit-ip/";
} else {
    myTwitchUrl = "http://pmarp.com:3000/check-if-online/";
    whitelistUrl = "http://pmarp.com:3000/submit-ip/";
}

const ipUrl =
    "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572";

export const getTwitchStreamers = () => {
    return axios.post(myTwitchUrl);
};

export const getIpUrl = () => {
    return axios.post(ipUrl);
};

export const setWhitelist = (ip) => {
    return axios.post(whitelistUrl, {'ip':ip});
};
