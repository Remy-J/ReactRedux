import React from "react"
import ReactDOM from "react-dom"
import App from "../src/components/App"
import reducers from "./reducers"
import registerServiceWorker from "./RegisterServiceWorker"
// Import des Libs
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

// Création du store avec le middleware thunk dedans
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
