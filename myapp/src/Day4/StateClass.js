import React,{ Component} from "react";
class StateClass extends Component{
    state={
        color:"Yellow",
        price:121
    }
    handleChange=()=>{this.setState({price:"150"})}
    render()
    {
        return(
            <div>
                <h1>The color I have selected is {this.state.color} the price is {this.state.price}</h1>
                <button onClick={this.handleChange}>Click me</button>
            </div>
        )
    }
}
export default StateClass;