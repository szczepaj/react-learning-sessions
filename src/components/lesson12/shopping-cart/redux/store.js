import {createStore} from "redux";
import {devToolsEnhancer} from "@redux-devtools/extension";
import {rootReducer} from "./reducer";

export const store = createStore(rootReducer,  devToolsEnhancer())