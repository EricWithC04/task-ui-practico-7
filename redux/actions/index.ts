import { Dispatch } from "redux"
import { LOGIN } from "../actionTypes"

export const reduxLogin = (username: string, password: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: LOGIN,
            payload: { username, password }
        })
    }
}