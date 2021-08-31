import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./DesignPatternApp.css";
import { Button } from "@material-ui/core";

class DesignPatternApp extends Component{
  render(){
    return(
      <div className="DPApp">
        <h1>Design Pattern ES6+</h1>
        <Button primary>Test</Button>
      </div>
    );
  }
}

export default hot(module)(DesignPatternApp);