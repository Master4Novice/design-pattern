import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./DesignPatternApp.css";
import Construction from "./module/construction/Construction";

class DesignPatternApp extends Component{
  render(){
    return(
      <div className="DPApp">
        <h1>Design Pattern ES6+</h1>
        <Construction />
      </div>
    );
  }
}

export default hot(module)(DesignPatternApp);