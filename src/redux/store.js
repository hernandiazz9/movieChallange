import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import loginReducer from "./reducer/loginReducer";
import movieReducer from "./reducer/movieReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    login: loginReducer,
    movie: movieReducer
});

const store = createStore(
    rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
