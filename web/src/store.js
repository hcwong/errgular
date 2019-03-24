import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const initialState = {
  currentProj: 'Select One',
  projData: {},
};

export const store = createStore(
  reducers,
  initialState as any,
  applyMiddleware(reduxThunk),
);
