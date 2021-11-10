const auth = (axios) => {
    return {
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
        token: async function(refreshToken) {
            return await axios.post("/token", {refreshToken: refreshToken})
        },
        updatePassword: async function(formData) {
            return await axios.post("/update-password", formData)
        }
    }
}

export default auth