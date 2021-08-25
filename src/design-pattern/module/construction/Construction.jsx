import React, { Component } from 'react';
import Wages from './modules/Wages';

const wages = new Wages();

class Construction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            wage: 0
        }
        this.onChangeWage = this.onChangeWage.bind(this);
        this.onAddWage = this.onAddWage.bind(this);
        this.onRemoveWage = this.onRemoveWage.bind(this);
    }

    onChangeWage(value) {
       this.setState({wage: value});
    }

    onAddWage() {
        const wage = parseInt(this.state.wage);
        if(!isNaN(wage) && wage >=50 && wage <= 1000) {
            if(!wages.isWageExist(wage)) {
                wages.addWage(parseInt(this.state.wage));
            }
        }
        this.setState({wage: 0});
    }

    onRemoveWage() {
        const wage = parseInt(this.state.wage);
        if(wages.isWageExist(wage)) {
            wages.removeWage(wage); 
        }
        this.setState({wage: 0});
    }

    render() {
        
        return (
            <div>
              <h3>List of Available Wages</h3>
              <ul>
                  {wages.getAvailableWages().map((wage, index) => <li key={index}><span>&#x20B9;&nbsp;</span>{wage}</li>)}
              </ul>
              <input type="number" onChange={(e) => this.onChangeWage(e.target.value)} value={this.state.wage} />
              <input type="button" onClick={this.onAddWage} value="Add Wage" />
              <input type="button" onClick={this.onRemoveWage} value="Remove Wage" />
            </div>
        );
    }
}

export default Construction;