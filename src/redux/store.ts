import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import throttle from "lodash.throttle";
import reducers from "./companies";
import { loadState, saveState } from "./localStorage";

const middleware = [thunk];
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    saveState({ companies: store.getState().companies });
  }, 1000)
);

export type AppState = ReturnType<typeof reducers>;
export default store;
