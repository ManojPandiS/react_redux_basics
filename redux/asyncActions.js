// run - node ./asyncActions.js

const axios = require('axios')
const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default

const createStore = redux.legacy_createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading : false,
    users : [],
    error : ''
}

const FEACH_USERS_REQUEST = 'FEACH_USERS_REQUEST';
const FEACH_USERS_SUCCESS = 'FEACH_USERS_SUCCESS';
const FEACH_USERS_FAILURE = 'FEACH_USERS_FAILURE';

const feachUserRequest = () => {
    return {
        type : FEACH_USERS_REQUEST
    }
}

const feachUserSuccess = users => {
    return {
        type : FEACH_USERS_SUCCESS,
        payload : users
    }
}

const feachUserFailure = error => {
    return {
        type : FEACH_USERS_FAILURE,
        error : error
    }
}

const reducer = ( state = initialState, action ) => {
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

const feachUsers = () => {
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

const store = createStore( reducer, applyMiddleware( thunkMiddleware ) )

console.log( 'Init ', store.getState() )

store.subscribe( () => console.log( store.getState() ) );

store.dispatch( feachUsers() )