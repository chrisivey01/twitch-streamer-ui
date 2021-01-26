import axios from "axios";

let myTwitchUrl, whitelistUrl, ipUrl;
if (process.env.NODE_ENV === "development") {
    myTwitchUrl = "http://localhost:3002/check-if-online/";
	whitelistUrl = "http://localhost:3003/whitelist/add-whitelist";
	ipUrl = "http://localhost:3003/get-ip"
} else {
    myTwitchUrl = "http://api.pmarp.com/twitch/fetch-streamers";
	whitelistUrl = "http://api.pmarp.com/whitelist/add-whitelist";
	ipUrl = "http://api.pma-rp.com/whitelist/get-ip"
}

export const getTwitchStreamers = () => {
    return axios.post(myTwitchUrl);
};

export const getIpUrl = () => {
    return axios.get(ipUrl);
};

export const setWhitelist = (captcha) => {
    return axios.post(whitelistUrl, {}, {
		headers: {
			'Content-Type': 'application/json',
			'g-recaptcha-response': captcha
		}
	});
};
