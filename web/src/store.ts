import { createStore } from 'redux';
import reducer from "./reducers";

const initialState = {
  currentProj: "Select One",
  isProjButtonClicked: false
};

export const store = createStore(reducer, initialState);
