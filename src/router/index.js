import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AppRouter from "./app";
import AuthRouter from "./auth";
import InnerPageLayout from "../layout/inner-page-layout"
import { actions } from "../store"
import CreatePassword from '../pages/createPassword/register-form'

export default function MainRouter() {

    const dispatch = useDispatch()

    useEffect(() => {
        // Set language when page refreshing
        // const selectedLanguage = window.localStorage.getItem("language")
        // dispatch(actions.language.setLanguage(selectedLanguage))

        // Set user data, token and role when page refreshing
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
                {/* <Route exact path="/">
                    <MainLayout>
                        <HomeDsand />
                    </MainLayout>
                </Route> */}
                <Route path="/auth">
                    <AuthRouter />
                </Route>
                <Route path="/">
                    {/* <AppRouter /> */}
                    <InnerPageLayout>
                        <AppRouter />
                    </InnerPageLayout>
                </Route>

               < Route path="/create_password/:token">
                            < CreatePassword />
                        </Route>
                {/* <Route path="/404">
                    <InnerPageLayout><Page404 /></InnerPageLayout>
                </Route>
                <Route path={"/register/vendor/:token"}>
                    <InnerPageLayout><VendorRegistration /></InnerPageLayout>
                </Route>
                <Route exact={true} path={`/register/vendor`}>
                    <InnerPageLayout><VendorRegistration /></InnerPageLayout>
                </Route>
                <Route path={`/vendor_:id`} exact>
                    <InnerPageLayout><VendorScreen /></InnerPageLayout>
                </Route>
                <Route path={`/vendor_:id/product_:pid`} exact>
                    <InnerPageLayout><ProductScreen /></InnerPageLayout>
                </Route> */}
            </Switch>
        </Router>
    )
}