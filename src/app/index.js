import React from "react";
import ReactDOM from "react-dom";


import {ReactChart} from "./components/ReactChart";

import './styles/scss/style.scss';



class App extends React.Component {
  render() {
    return (
      <div>
        <ReactChart />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
