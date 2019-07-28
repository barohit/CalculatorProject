import React, {Component} from 'react'
import Button from './Button.js'
import "./buttons.css"

class Calculator extends Component {
    state = {
        currval: 0
    };

    render() {
        return (
            
            <div className="calculator">
            <input type="text" id="topbar" /> <br />
                <div className="Row">
                    <Button val="AC" />
                    <Button val="flip" />
                    <Button val="remainder" />
                    <Button val="/" />
                </div>
                <br />
                <div className="Row"> 
                    <Button val="7" />
                    <Button val="8" />
                    <Button val="9" />
                    <Button val="x" />
                </div>
                <br />
                <div className="Row"> 
                <Button val="4" />
                <Button val="5" />
                <Button val="6" />
                <Button val="-" />
                </div>
                <br />
                <div className="Row"> 
                <Button val="1" />
                <Button val="2" />
                <Button val="3" />
                <Button val="+" />
                </div>
                <br />
                <div className="Row"> 
                <Button id="zero" val="0" />
                <Button val="decimal" />
                <Button val="equals" />
                </div>
                <br />
             </div>
        )
    }
   
}

export default Calculator;