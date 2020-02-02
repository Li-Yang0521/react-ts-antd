/*
 * @Author: Yang Li 
 * @Date: 2020-02-02 10:49:02 
 * @Last Modified by: Yang Li
 * @Last Modified time: 2020-02-02 10:50:57
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import * as serviceWorker from "./Assets/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
