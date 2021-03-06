import { GET_PROJ } from './actions';

// tslint:disable-next-line
interface action {
  type: string;
  data?: any;
  projData: any;
}

function appReducer(state: any, action: action) {
  switch (action.type) {
    case GET_PROJ:
      return (<any>Object).assign({}, state, {
        currentProj: action.data,
        projData: action.projData,
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
