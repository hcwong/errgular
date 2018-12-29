import { combineReducers } from "redux";
import {GET_PROJ, PROJ_BTN_CLICKED} from "./actions";

interface projAction {
  type: string 
  projName: string
}

const initialState = {
  currentProj: <string> "Select One",
  isProjButtonClicked: <boolean> false
};

export function chooseNameReducer(state = initialState, action: any) {
  switch(action.type) {
    case GET_PROJ:
      return (<any>Object).assign({}, state, {
        currentProj: action.data
      });
    case PROJ_BTN_CLICKED:
      return(<any>Object).assign({}, state, {
        isProjButtonClicked: !action.data
      });
  }
}

export default combineReducers(chooseNameReducer);