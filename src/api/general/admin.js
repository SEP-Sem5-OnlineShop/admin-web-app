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
    createVendor:async function(formData,id){
        console.log(formData)
        return await axios.post('/app/admin/createVendor',formData)

    },
    updateStatus:async function(id){
        console.log("inside axios: ",id)
        return await axios.put(`/app/admin/updateStatus`)
    }
    
}

export default admin