const axios = require("axios");
const MY_TOKEN = '7894509044:AAHTSRsFKmXFNsvia0T_rHpvKA2JDGyrg-A';

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance(){
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            });
        },
        post(method, data) {
            return axios({
                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
            });
        },
    };
}

module.exports = {axiosInstance: getAxiosInstance() }