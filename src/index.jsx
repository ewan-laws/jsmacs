import { h, render } from "preact"

import { Provider } from "react-redux"

import store from "./store"

import "./styles/reset.css"
import "./styles/main.scss"

const App = () => {
  return <h1>Hello world</h1>
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("mount")
)
