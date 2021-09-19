import axios from "axios";

const admin = {

    getVendor: async function () {
        return await axios.get("/app/admin/vendor",{params:{id:4}})
    },
    
    getVendors: async function () {
        return await axios.get("/app/admin/vendors")
    },

    getRequests: async function () {
        return await axios.get("/app/admin/vendorRequests")
    },
    
}

export default admin