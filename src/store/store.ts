import { applyMiddleware, createStore, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Store } from 'src/store/rootReducer';

import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";

const bindMiddleware = (middleware: Middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

function configureStore(initialStore: Store) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialStore,
    bindMiddleware(sagaMiddleware)
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;