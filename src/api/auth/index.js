import {axios} from "../index";

const auth = {
    login: async function (telephone, password) {
        return await axios.post("/login-admin", {
            telephone: telephone,
            password: password
        })
    },
    logout: async function () {
        return await axios.get("/logout")
    },
    test: async function () {
        return await axios.get("/test")
    },
    token: async function() {
        return await axios.get("/token")
    }
}

export default auth