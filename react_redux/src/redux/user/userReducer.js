import { FEACH_USERS_FAILURE, FEACH_USERS_REQUEST, FEACH_USERS_SUCCESS } from "./userTyps"

const initialState = {
    loading : false,
    users : [],
    error : ''
}

const userReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case FEACH_USERS_REQUEST : return {
            ...state,
            loading : true
        }
        case FEACH_USERS_SUCCESS : return {
            loading : false,
            users : action.payload,
            error : ''
        }
        case FEACH_USERS_FAILURE : return {
            loading : false,
            error : action.payload,
            users : []
        }

        default : return state
    }
}

export default userReducer;