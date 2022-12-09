// run - node ./combineReducer.js 

const redux = require('redux')
const createStore = redux.legacy_createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type : BUY_CAKE,
        info : 'First project BUY_CAKE'
    }
}

function buyIcecream(){
    return {
        type : BUY_ICECREAM,
        info : 'First project BUY_ICECREAM'
    }
}

const initialStateOfCake = {
    numOfCakes : 10
}

const initialStateOfIcecream = {
    numOfIcecream : 20
}

const cakeReducer = ( state = initialStateOfCake, action ) => {
    switch( action.type ) {
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }
        default : return state
    }
}

const icecreamReducer = ( state = initialStateOfIcecream, action ) => {
    switch( action.type ) {
        case BUY_ICECREAM : return {
            ...state,
            numOfIcecream : state.numOfIcecream - 1
        }
        default : return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream : icecreamReducer
})

const store = createStore( rootReducer )
console.log( 'Initial state', store.getState() )

const unsubscribe = store.subscribe( () => console.log( 'updated store', store.getState() ) );

store.dispatch( buyCake() )
store.dispatch( buyCake() )
store.dispatch( buyIcecream() )

unsubscribe()
