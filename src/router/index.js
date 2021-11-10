import React, { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AuthRouter from "./auth";
import InnerPageLayout from "../layout/inner-page-layout"
import { actions } from "../store"
import CreatePassword from '../pages/createPassword/register-form'
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import ProfileSettings from "../pages/settings/profileSettings";
import Tables from "../pages/VendorList/TableFilter";
import singleVendor from "../pages/SingleVendor/SngleVendor";
import report from "../pages/Report/ReportPage";
import singleProduct from "../pages/singleProduct/SngleVendor";
import requestList from "../pages/vendorRequestList/RequestList";
import RegisterVendor from "../pages/vendor/register";
import profile from "../pages/myProfile/profile";
import createPassword from "../pages/createPassword/register-form";
import admin from "../pages/adminAdd";
import VendorReport from "../pages/Noneed/vendorReport";
import Footer from "../components/Footer";

export default function MainRouter() {

    const dispatch = useDispatch()
    const Role = useSelector(state => state.user.userData.role)

    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem("userData"))
        const token = window.localStorage.getItem("token")
        const role = window.localStorage.getItem("role")
        const isLogin = window.localStorage.getItem("isLogin")
        dispatch(actions.user.setUserData(userData))
        dispatch(actions.user.setAuthToken(token))
        dispatch(actions.user.setRole(role))
        dispatch(actions.user.setIsLogin(isLogin))

    }, [dispatch])

    return (
        <Router>
            <Switch>

                <Route path="/auth">
                    <AuthRouter />
                </Route>

                <Route path="/create_password/:token">
                    < CreatePassword />
                </Route>

                <InnerPageLayout>
                    <header className="App-header" />
                    <Sidebar />
                    <div className="md:ml-64">
                        <div style={{minHeight: 'calc(100vh - 169px)'}}>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/profileSettings" component={ProfileSettings} />
                            <Route exact path="/tables" component={Tables} />
                            <Route exact path="/singleVendor/:id" component={singleVendor} />
                            <Route exact path="/reports" component={report} />

                            <Route exact path="/singleProduct/:id" component={singleProduct} />

                            <Route exact path="/requestList" component={requestList} />
                            <Route exact path="/vendor/register/:id" component={RegisterVendor} />
                            <Route exact path="/profile" component={profile} />
                            <Route exact path="/create_password/:token" component={createPassword} />

                            {Role=='superAdmin' ? (
                                <Route exact path="/adminCreate" component={admin} />

                            ) : (
                                ''
                            )}
                            <Route exact path="/vendorReports" component={VendorReport} />
                        </div>
                        <Footer />
                    </div>
                </InnerPageLayout>

            </Switch>
        </Router>
    )
}