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
                <Button val="AC" />
                <Button val="flip" />
                <Button val="remainder" />
                <Button val="/" />
                <br />
                <Button val="7" />
                <Button val="8" />
                <Button val="9" />
                <Button val="x" />
                <br />
                <Button val="4" />
                <Button val="5" />
                <Button val="6" />
                <Button val="-" />
                <br />
                <Button val="1" />
                <Button val="2" />
                <Button val="3" />
                <Button val="+" />
                <br />
                <Button id="zero" val="0" />
                <Button val="decimal" />
                <Button val="equals" />
                <br />
             </div>
        )
    }
   
}

export default Calculator;