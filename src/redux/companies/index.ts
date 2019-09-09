import companies from "./companiesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ companies });

export default rootReducer;
