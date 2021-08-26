import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./DesignPatternApp.css";

import Construction from "./module/construction/Construction";
import DisplayExpense from "./factory/display/DisplayExpense";

class DesignPatternApp extends Component{
  render(){
    return(
      <div className="DPApp">
        <h1>Design Pattern ES6+</h1>
        <Construction />
        <DisplayExpense />
      </div>
    );
  }
}

export default hot(module)(DesignPatternApp);