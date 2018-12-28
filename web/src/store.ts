import { createStore } from 'redux';
import { getProj } from "./actions";
import { appReducer } from "./reducers";

const store = createStore(appReducer);
