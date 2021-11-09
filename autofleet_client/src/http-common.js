import axios from "axios";

export default axios.create({
    baseURL: "https://nodejs-autofleet-server.herokuapp.com/api",
    headers: {
        "Accept": "application/json", "Content-type": "application/json", 'Access-Control-Allow-Origin': '*',
        common:{'Authorization': 'Bearer'}
    }
});