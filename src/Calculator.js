import React, {Component} from 'react'
import Button from './Button.js'
import "./buttons.css"

class Calculator extends Component {
    state = {
        currval: ''
    };

    pressButton = (e) => {
        let curr = this.state.currval; 
        curr.concat(e);
        this.setState({currVal: e})
    }

    render() {
        return (
            
            <div className="calculator">
            <input type="text" id="topbar" value={this.state.currval}/> <br />
                <div className="Row">
                    <Button val="AC" pressButton={this.pressButton} runOperation={this.runOperation}/>
                    <Button val="flip" pressButton={this.pressButton} runOperation={this.runOperation}/>
                    <Button val="remainder" pressButton={this.pressButton} runOperation={this.runOperation}/>
                    <Button val="/" pressButton={this.pressButton} runOperation={this.runOperation}/>
                </div>
                <br />
                <div className="Row"> 
                    <Button val="7" pressButton={this.pressButton} runOperation={this.runOperation}/>
                    <Button val="8" pressButton={this.pressButton} runOperation={this.runOperation}/>
                    <Button val="9" pressButton={this.pressButton} runOperation={this.runOperation}/>
                    <Button val="x" pressButton={this.pressButton} runOperation={this.runOperation}/>
                </div>
                <br />
                <div className="Row"> 
                <Button val="4" pressButton={this.pressButton} runOperation={this.runOperation}/>
                <Button val="5" pressButton={this.pressButton} runOperation={this.runOperation}/>
                <Button val="6" pressButton={this.pressButton} runOperation={this.runOperation}/>
                <Button val="-" pressButton={this.pressButton} runOperation={this.runOperation}/>
                </div>
                <br />
                <div className="Row"> 
                <Button val="1" pressButton={this.pressButton} runOperation={this.runOperation}/>
                <Button val="2" pressButton={this.pressButton}  runOperation={this.runOperation}/>
                <Button val="3" pressButton={this.pressButton} runOperation={this.runOperation}/>
                <Button val="+" pressButton={this.pressButton} runOperation={this.runOperation}/>
                </div>
                <br />
                <div className="Row"> 
                <Button id="zero" val="0" pressButton={this.pressButton} runOperation={this.runOperation}/>
                <Button val="decimal" pressButton={this.pressButton} runOperation={this.runOperation}/>
                <Button val="equals" pressButton={this.pressButton} runOperation={this.runOperation}/>
                </div>
                <br />
             </div>
        )
    }
   
}

export default Calculator;