import {configureStore} from "@reduxjs/toolkit"
import {localSignIn, signOUt} from "./user/thunk";
import user from "./user"

const store = configureStore({
    reducer: {
        user: user.reducer,
    }
})

export default store

export const actions = {
    user: user.actions,
}

export const thunks = {
    user: {
        localSignIn,
        signOUt
    }
}