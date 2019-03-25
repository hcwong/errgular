// @flow
import { GET_PROJ } from './actions';
import { ProjectState } from './store';

interface action {
  type: string;
  data?: any;
  projData: any;
}

function appReducer(state: ProjectState, action: action) {
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
