import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  currentProj: 'Select One',
  projData: any
  // isProjButtonClicked: false,
};

export const store = createStore(reducers, initialState as any);
