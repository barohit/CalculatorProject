import React, {Component} from 'react'
import Button from './Button.js'
import "./buttons.css"

class Calculator extends Component {
    state = {
        currval: 0,
        storedval: 0,
        currFunc: '',
        decimalInserted: false,
        decimalCounter: -1
    };

    pressButton = (e) => {
        
        let curr = this.state.currval;
        let currF = this.state.currFunc; 
        let decIns = this.state.decimalInserted;
        if (this.state.decimalInserted === false) {
            curr *= 10;
            curr += e; 
            this.setState({currval: curr, storedval: this.state.storedval, currFunc: currF, decimalInserted: decIns, decimalCounter: this.state.decimalCounter});
        } else {
            e *= Math.pow(10, this.state.decimalCounter); 
            curr += e; 
            let currCount = this.state.decimalCounter;
            currCount--; 
            this.setState({currval: curr, storedval: this.state.storedval, currFunc: currF, decimalInserted: decIns, decimalCounter: currCount});
        }
      
    }

    clear = () => {
        this.setState({currval: 0, storedval: this.state.storedval, currFunc: '', decimalInserted: false, decimalCounter: -1});
    }

    flip = () => {
        let curr = this.state.currval; 
        let currF = this.state.currFunc;
        let decIns = this.state.decimalInserted;
        curr *= -1
        this.setState({currval: curr, storedval: this.state.storedval, currFunc: currF, decimalInserted: decIns, decimalCounter: this.state.decimalCounter});
    }

    loadFunc = (e) => {
        let curr = this.state.currval;
        let currF = this.state.currFunc; 
        if (this.state.storedval !== 0) {
            this.equals();
        } 
        currF = e; 
        this.setState({currval: 0, storedval: curr, currFunc: currF, decimalInserted: false, decimalCounter: -1});
    }

    insertDecimal = () => {
        let curr = this.state.currval;
        let currF = this.state.currFunc; 
        let decIns = this.state.decimalInserted;
        decIns = true; 
        curr += 0.00;
        this.setState({currval: curr, storedval: this.state.storedval, currFunc: currF, decimalInserted: decIns, decimalCounter: this.state.decimalCounter});
    }

    equals = () => {
        let curr = 0;
        switch(this.state.currFunc) {
            case "remainder": 
                curr = this.state.storedval % this.state.currval;
                break;
            case "multiply": 
                curr = this.state.storedval * this.state.currval;
                break;
            case "subtract":
                curr = this.state.storedval - this.state.currval;
                break;
            case "add":
                curr = this.state.storedval + this.state.currval;
                break;
            case "divide":
                curr = this.state.storedval / this.state.currval;
                break;
            default: 
                break;
                
        }
        this.setState({currval: curr, storedval: 0, currFunc: '', decimalInserted: false, decimalCounter: -1})

    }

    


    render() {
        return (
            
            <div className="calculator">
            <input type="number" id="topbar" value={this.state.currval}/> <br />
                <div className="Row">
                    {/* val is just to improve readability while coding */}
                    <Button val="AC" pressButton={this.clear} />
                    <Button val="flip" pressButton={this.flip} />
                    <Button val="remainder" pressButton={this.loadFunc} />
                    <Button val="/" pressButton={this.loadFunc} />
                </div>
                <br />
                <div className="Row"> 
                    <Button val="7" pressButton={this.pressButton} />
                    <Button val="8" pressButton={this.pressButton} />
                    <Button val="9" pressButton={this.pressButton} />
                    <Button val="x" pressButton={this.loadFunc} />
                </div>
                <br />
                <div className="Row"> 
                <Button val="4" pressButton={this.pressButton} />
                <Button val="5" pressButton={this.pressButton} />
                <Button val="6" pressButton={this.pressButton} />
                <Button val="-" pressButton={this.loadFunc} />
                </div>
                <br />
                <div className="Row"> 
                <Button val="1" pressButton={this.pressButton}/>
                <Button val="2" pressButton={this.pressButton} />
                <Button val="3" pressButton={this.pressButton}/>
                <Button val="+" pressButton={this.loadFunc} />
                </div>
                <br />
                <div className="Row"> 
                <Button id="zero" val="0" pressButton={this.pressButton} />
                <Button val="decimal" pressButton={this.insertDecimal} />
                <Button val="equals" pressButton={this.equals} />
                </div>
                <br />
             </div>
        )
    }
   
}

export default Calculator;