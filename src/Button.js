import React, {Component} from 'react'
import Zero from "./assets/0.png";
import One from "./assets/1.png";
import Two from "./assets/2.png";
import Three from "./assets/3.png";
import Four from "./assets/4.png";
import Five from "./assets/5.png";
import Six from "./assets/6.png";
import Seven from "./assets/7.png"
import Eight from "./assets/8.png"
import Nine from "./assets/9.png";
import Flip from "./assets/flip.png"
import Remainder from "./assets/remainder.png"
import Divide from "./assets/divide.png"
import Clear from "./assets/AC.png"
import Add from "./assets/add.png"
import Multiply from "./assets/multiply.png"
import Subtract from "./assets/subtract.png"
import Decimal from "./assets/decimal.png"
import Equals from "./assets/equals.png"


class Button extends Component {
    state = {
        imgloc: Zero
    }
    calculateValue = () => {
        switch (this.props.val) {
            case "0":
                this.setState({imgloc: Zero, id: "zero", pressButton: this.props.pressButton});
                break;
            case "1":
                this.setState({imgloc: One, pressButton: "1"});
                break;
            case "2":
                this.setState({imgloc: Two, pressButton: this.props.pressButton});
                break; 
            case "3":
                this.setState({imgloc: Three, pressButton: this.props.pressButton});
                break;
            case "4":
                this.setState({imgloc: Four, pressButton: this.props.pressButton});
                break;
            case "5":
                this.setState({imgloc: Five, pressButton: this.props.pressButton});
                break;
            case "6":
                this.setState({imgloc: Six, pressButton: this.props.pressButton});
                break;
            case "7":
                this.setState({imgloc: Seven, pressButton: this.props.pressButton});
                break;
            case "8":
                this.setState({imgloc: Eight, pressButton: this.props.pressButton});
                break;
            case "9":
                this.setState({imgloc: Nine, pressButton: this.props.pressButton});
                break;
            case "x":
                this.setState({imgloc: Multiply});
                break;
            case "/": 
                this.setState({imgloc: Divide});
                break;
            case "+":
                this.setState({imgloc: Add});
                break;
            case "-":
                this.setState({imgloc: Subtract});
                break; 
            case "AC":
                this.setState({imgloc: Clear});
                break;
            case "flip":
                this.setState({imgloc: Flip});
                break;
            case "remainder":
                this.setState({imgloc: Remainder});
                break;
            case "decimal":
                this.setState({imgloc: Decimal});
                break;
            case "equals":
                this.setState({imgloc: Equals});
                break;
            default: 
                break;
        }
    }
    render() {
        
        return (
            <div className="Button" onLoad = {() => this.calculateValue()}>
                <img src={this.state.imgloc} id={this.state.id} alt={this.state.imgloc} onclick={() => {this.props.pressButton(this.state.pressButton)}} />
            </div>
        )
    }
    
    
}

export default Button;