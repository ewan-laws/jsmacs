import { h, render } from "preact"

import "./styles/reset.css"
import "./styles/main.scss"

const App = () => <h1>Hello world</h1>

render(<App />, document.getElementById("mount"))
