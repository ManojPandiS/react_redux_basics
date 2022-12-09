import axios from "axios"
import { FEACH_USERS_FAILURE, FEACH_USERS_REQUEST, FEACH_USERS_SUCCESS } from "./userTyps"

export const feachUserRequest = () => {
    return {
        type : FEACH_USERS_REQUEST
    }
}

export const feachUserSuccess = users => {
    return {
        type : FEACH_USERS_SUCCESS,
        payload : users
    }
}

export const feachUserFailure = error => {
    return {
        type : FEACH_USERS_FAILURE,
        error : error
    }
}

export const feachUsers = () => {
    return function( dispatch ) {
        dispatch( feachUserRequest() )
        axios.get('https://message-list.appspot.com/messages')
            .then( response => {
                const users = response.data.messages.map( user => user?.author?.name );
                dispatch( feachUserSuccess( users ) )
            })
            .catch( error => {
                dispatch( feachUserFailure( error ) )
            })
    }
}