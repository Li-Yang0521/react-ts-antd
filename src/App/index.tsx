/*
 * @Author: Yang Li
 * @Date: 2020-02-02 10:48:36
 * @Last Modified by: Yang Li
 * @Last Modified time: 2020-02-02 10:52:15
 */
import React from "react";
import logo from "../Assets/images/logo.svg";
import { Button } from "antd";

import "./index.less";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
