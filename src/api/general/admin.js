import axios from "axios";

const admin = {
    login: async function (telephone, password) {
        return await axios.post("/auth/login", {
            telephone: telephone,
            password: password
        })
    },

    

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

    getNumberOfVendors:async function () {
        return await axios.get("/app/admin/NumberOfVendors")
    },
    getPurchaseCount:async function () {
        return await axios.get("/app/admin/getPurchaseCount")
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
        return await axios.put(`/app/admin/updateStatus/${id}`)
    },

    getAdmin: async function (id) {
        return await axios.get(`/app/admin/adminProfile/${id}`)
    },
    createAdmin:async function(formData){
        console.log(formData)
        return await axios.post('/app/admin/createAdmin',formData)

    },
    rejectRequest:async function(id){
        console.log("inside axios: ",id)
        return await axios.put(`/app/admin/rejectRequest/${id}`)
    },

    createPassword:async function(formData,token){
        console.log(formData)
        return await axios.post(`/app/admin/create_password/${token}`,formData)

    },
    
}

export default admin