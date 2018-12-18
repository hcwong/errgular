// import * as projTypes from './types';
import { GET_PROJ } from "./actions";

interface projAction {
  type: String 
  projName: String
}

// export const projReducer = (action: projTypes.ProjectAction) => {
//   switch (action.type) {
//     case 'CHOOSE_PROJECT':
//       break;
//   }
// };

const initialState = {
  type: String,
  projName: String,
};

export function changeProjName(state = initialState, action: projAction) {
  return (<any>Object).assign({}, state, {
    type: action.type,
    projName: action.projName
  })
}
