// @flow
import { GET_PROJ } from './actions';

interface action {
  type: string;
  data?: any;
  projData: any;
}

function appReducer(state: any, action: action) {
  switch (action.type) {
    case GET_PROJ:
      return (Object).assign({}, state, {
        currentProj: action.data,
        projData: action.projData,
      });
    default:
      return state;
  }
}

export default appReducer;
