import { createStore, combineReducers } from "redux";
import personReducer from "./reducers/personReducer";

const rootReducer = combineReducers({
  personReducer: personReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
