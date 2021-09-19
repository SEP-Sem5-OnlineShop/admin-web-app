import axios from "axios";

const admin = {

    getVendor: async function (id) {
        return await axios.get(`/app/admin/vendor/${id}`)
    },
    
    getVendors: async function () {
        return await axios.get("/app/admin/vendors")
    },

    getRequests: async function () {
        return await axios.get("/app/admin/vendorRequests")
    },
    
}

export default admin