import { createStore } from 'redux';
import { getProj } from "./actions";
import { changeProjName } from "./reducers";

const store = createStore(changeProjName);

store.dispatch(changeProjName(getProj("placeholder"));