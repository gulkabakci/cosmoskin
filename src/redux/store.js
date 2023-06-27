import {combineReducers,createStore,applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import { defaults } from "autoprefixer"
import { drawerReducer } from "./reducers/drawer";


let initialState = {  //başlangıç durumlarını temsil eden obje
 
}

 const reducers = combineReducers({
    drawer:drawerReducer
 })

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)));
export default store