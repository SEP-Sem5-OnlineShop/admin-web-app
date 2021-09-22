import axios from "axios";

const admin = {

    getVendor: async function (id) {
        return await axios.get(`/app/admin/vendor/${id}`)
    },

    getProduct: async function (id) {
        return await axios.get(`/app/admin/singleProduct/${id}`)
    },

    getRequest: async function (id) {
        return await axios.get(`/app/vendor/register/${id}`)
    },

    getProducts: async function (id) {
        return await axios.get(`/app/admin/Products/${id}`)
    },
    
    getVendors: async function () {
        return await axios.get("/app/admin/vendors")
    },

    getRequests: async function () {
        return await axios.get("/app/admin/vendorRequests")
    },

    removeVendor: async function (id) {
        return await axios.put(`/app/admin/singleVendor/${id}`)
        
    },
    getMaxProducts: async function(){
        return await axios.get('/app/admin/')
    },
    createVendor:async function(formData){
        return await axios.post('/app/admin/createeVendor',formData)

    }
    
}

export default admin