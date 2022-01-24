import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { store } from "./store/index";

import { Provider } from "react-redux";

import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
