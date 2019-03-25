import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const initialState: ProjectState = {
  currentProj: 'Select One',
  projData: {},
};

export interface ProjectState {
  currentProj: string,
  projData: Object
}

export const store = createStore(
  reducers,
  initialState as any,
  applyMiddleware(reduxThunk),
);
