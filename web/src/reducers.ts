// import { combineReducers } from "redux";
import { GET_PROJ, PROJ_BTN_CLICKED } from './actions';

// tslint:disable-next-line
interface action {
  type: string;
  data?: any;
}

function appReducer(state: any, action: action) {
  switch (action.type) {
    case GET_PROJ:
      return (<any>Object).assign({}, state, {
        currentProj: action.data,
      });
    // case PROJ_BTN_CLICKED:
    //   return (<any>Object).assign({}, state, {
    //     isProjButtonClicked: !state.isProjButtonClicked,
    //   });
    default:
      return state;
  }
}

export default appReducer;
