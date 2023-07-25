import {legacy_createStore as createStore,combineReducers,applyMiddleware,compose} from "redux"
import { ProductReducer } from "../reducers/ProductReducer"
import thunk from "redux-thunk"
import { CartReducer } from "../reducers/CartReducer";


const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);


const rootReducer = combineReducers({
        products:ProductReducer,
        carts:CartReducer
})

const store = createStore(rootReducer,enhancer)

export default store