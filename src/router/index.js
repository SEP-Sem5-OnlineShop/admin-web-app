import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// import HomeDsand from "../views/home-dsand";
// import AppRouter from "./app";
// import AuthRouter from "./auth";
// import MainLayout from "../layout/home-layout";
// import InnerPageLayout from "../layout/inner-page-layout"
// import VendorRegistration from '../views/app/vendor/register/index'
// import SingleProduct from '../views/app/product/single/singleProduct'
// import VendorScreen from "../views/app/vendorScreen";
// import Page404 from "../views/404"
// import Pizza from '../assets/img/pizza.jpg'
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
// import Tables from 'pages/Tables';
// import Tables from 'components/Table'

import Tables from 'pages/VendorList/TableFilter';
// import Tables from 'pages/VendorList';
import singleVendor from 'pages/SingleVendor/SngleVendor';
import profile from 'pages/myProfile/profile';

import singleProduct from 'pages/singleProduct/SngleVendor';

import requestList from 'pages/vendorRequestList/RequestList';
// import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import RegisterVendor from 'pages/vendor/register/index';


import { actions } from "../store"

export default function MainRouter() {

    const dispatch = useDispatch()

    useEffect(() => {
        // Set language when page refreshing
        const selectedLanguage = window.localStorage.getItem("language")
        dispatch(actions.language.setLanguage(selectedLanguage))

        // Set user data, token and role when page refreshing
        // const userData = JSON.parse(window.localStorage.getItem("userData"))
        // const token = window.localStorage.getItem("token")
        // const role = window.localStorage.getItem("role")
        // dispatch(actions.user.setUserData(userData))
        // dispatch(actions.user.setAuthToken(token))
        // dispatch(actions.user.setRole(role))

    }, [])

    return (
        <Router>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
            <Sidebar />
             <div className="md:ml-64">
                 <div style={{minHeight: 'calc(100vh - 169px)'}}>
                     <Switch>
                         <Route exact path="/" component={Dashboard} />
                         <Route exact path="/settings" component={Settings} />
                         <Route exact path="/tables" component={Tables} />
                         <Route exact path="/singleVendor/:id" component={singleVendor} />

                         <Route exact path="/singleProduct/:id" component={singleProduct} />

                         <Route exact path="/requestList" component={requestList} />
                         <Route exact path="/vendor/register/:id" component={RegisterVendor} />
                         <Route exact path="/profile" component={profile} />

                         {/* <Route exact path="/maps" component={Maps} /> */}
                        {/* <Redirect from="*" to="/" /> */}
                     </Switch>
                 </div>

                 {/* <p>{this.state.apiResponse}</p> */}
                 
                 <Footer />
             </div>
        </Router>
    )
}