import { combineReducers } from "redux";
import {GET_PROJ, PROJ_BTN_CLICKED} from "./actions";

interface action {
  type: string;
  data?: any;
}

export function appReducer(state: any, action: action) {
  switch(action.type) {
    case GET_PROJ:
      return (<any>Object).assign({}, state, {
        currentProj: action.data
      });
    case PROJ_BTN_CLICKED:
      return (<any>Object).assign({}, state, {
        isProjButtonClicked: !state.isProjButtonClicked
      });
    default:
      return state;
  }
}

export default combineReducers(appReducer);