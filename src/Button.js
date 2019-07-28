import React, {Component} from 'react'

class Button extends Component {
    state = {
        imgloc: ''
    }
    calculateValue = () => {
        switch (this.props.val) {
            case "0":
                this.setState({imgloc: "assets/0.png"});
                break;
            case "1":
                this.setState({imgloc: "assets/1.png"});
                break;
            case "2":
                this.setState({imgloc: "assets/2.png"});
                break; 
            case "3":
                this.setState({imgloc: "assets/3.png"});
                break;
            case "4":
                this.setState({imgloc: "assets/4.png"});
                break;
            case "5":
                this.setState({imgloc: "assets/5.png"});
                break;
            case "6":
                this.setState({imgloc: "assets/6.png"});
                break;
            case "7":
                this.setState({imgloc: "assets/7.png"});
                break;
            case "8":
                this.setState({imgloc: "assets/8.png"});
                break;
            case "9":
                this.setState({imgloc: "assets/9.png"});
                break;
            case "x":
                this.setState({imgloc: "assets/multiply.png"});
                break;
            case "/": 
                this.setState({imgloc: "assets/divide.png"});
                break;
            case "+":
                this.setState({imgloc: "assets/add.png"});
                break;
            case "-":
                this.setState({imgloc: "assets/subtract.png"});
                break; 
            case "AC":
                this.setState({imgloc: "assets/clear.png"});
                break;
            case "flip":
                this.setState({imgloc: "assets/flip.png"});
                break;
            case "remainder":
                this.setState({imgloc: "assets/remainder.png"});
                break;
            case "decimal":
                this.setState({imgloc: "assets/decimal.png"});
                break;
            case "equals":
                this.setState({imgloc: "assets/equals.png"});
                break;
            default: 
                break;
        }
    }
    render() {
        
        return (
            <div className="Button" onLoad = {() => this.calculateValue()}>
                <img src={this.state.imgloc} alt={this.state.imgloc} />
            </div>
        )
    }
    
    
}

export default Button;