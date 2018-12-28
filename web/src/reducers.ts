import { combineReducers } from "redux";
import {GET_PROJ} from "./actions";

interface projAction {
  type: String 
  projName: String
}

const initialState = {
  projName: String,
};

export function appReducer(state = initialState, action: any) {
  switch(action.type) {
    case GET_PROJ:
      return (<any>Object).assign({}, state, {
        projName: action.projName
      });
  }
}

export const reducer = combineReducers(appReducer);