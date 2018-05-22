import {createStore, applyMiddleware} from 'redux'
import {createLogicMiddleware} from 'redux-logic'
import reducer from './reducer'
import logic from './logic';

const deps = { // injected dependencies for logic
  // none needed
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const middleware = applyMiddleware(
  logicMiddleware
);

const enhancer = middleware;


export default function configureStore() {
  const store = createStore(reducer, enhancer);
  return store;
}
