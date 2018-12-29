import { createStore } from 'redux';
import { getProj } from "./actions";
import reducer from "./reducers";

const store = createStore(reducer);
