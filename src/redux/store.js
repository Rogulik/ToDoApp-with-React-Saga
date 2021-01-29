import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers/index"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/rootSaga"
import { composeWithDevTools } from "redux-devtools-extension"

const sagaMiddleware = createSagaMiddleware()

//for future development if we want to use more middleware in our redux
const middleware = [sagaMiddleware]

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export default store
