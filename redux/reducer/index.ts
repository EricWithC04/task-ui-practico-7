import { Action } from "redux"
import { LOGIN } from "../actionTypes"

const initialState = {
    user: {
        username: "",
        password: ""
    }
}

const reducer = (state = initialState, action: any) => {
    const { type, payload } = action

    switch (type) {
        case LOGIN:
            return {
                ...state,
                user: {
                    username: payload.username,
                    password: payload.password
                }
            }
        default:
            return state
    }

}

export default reducer