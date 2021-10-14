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
    },
    updatePassword: async function(formData) {
        return await axios.post("/update-password", formData)
    }
}

export default auth