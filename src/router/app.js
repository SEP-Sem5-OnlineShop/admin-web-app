import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import ProfileSettings from 'pages/settings/profileSettings';
// import Tables from 'pages/Tables';
// import Tables from 'components/Table'

import { useSelector } from "react-redux"

import Tables from 'pages/VendorList/TableFilter';
// import Tables from 'pages/VendorList';
import singleVendor from 'pages/SingleVendor/SngleVendor';
import profile from 'pages/myProfile/profile';

import singleProduct from 'pages/singleProduct/SngleVendor';

import requestList from 'pages/vendorRequestList/RequestList';
// import Maps from 'pages/Maps';
import Footer from 'components/Footer';
import modal from 'components/popup/Modal'

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import admin from 'pages/adminAdd/index'

import RegisterVendor from 'pages/vendor/register/index';
import createPassword from '../pages/createPassword/register-form'

import report from '../pages/Report/ReportPage'
import { actions } from "../store"

export default function AppRouter() {
    const Role = useSelector(state => state.user.userData.role)
    // console.log(Role)



    const dispatch = useDispatch()

    useEffect(() => {
        // Set language when page refreshing
        // const selectedLanguage = window.localStorage.getItem("language")
        // dispatch(actions.language.setLanguage(selectedLanguage))

        // Set user data, token and role when page refreshing
        const userData = JSON.parse(window.localStorage.getItem("userData"))
        const token = window.localStorage.getItem("token")
        const role = window.localStorage.getItem("role")
        dispatch(actions.user.setUserData(userData))
        dispatch(actions.user.setAuthToken(token))
        dispatch(actions.user.setRole(role))

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
                         <Route exact path="/profileSettings" component={ProfileSettings} />
                         <Route exact path="/tables" component={Tables} />
                         <Route exact path="/singleVendor/:id" component={singleVendor} />
                         <Route exact path="/reports" component={report} />
                         
                         <Route exact path="/singleProduct/:id" component={singleProduct} />

                         <Route exact path="/requestList" component={requestList} />
                         <Route exact path="/vendor/register/:id" component={RegisterVendor} />
                         {/* <Route exact path="/profile" component={login} /> */}
                         <Route exact path="/profile" component={profile} />
                         <Route exact path="/create_password/:token" component={createPassword} />
                         
                         {Role=='superAdmin' ? (
                             <Route exact path="/adminCreate" component={admin} />

                        ) : (
                           ''
                        )}



                         {/* <Route exact path="/adminCreate" component={admin} /> */}

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