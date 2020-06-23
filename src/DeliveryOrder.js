import React, {Component} from "react";

import './App.css';

class DeliveryOrder extends Component{

    constructor(props){
        super(props);
        this.state = {
            delivery: []
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8080/incoming-deliveries";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({expenses: data});
    }

    render() {
        return (
            <div>
                <button onClick={this.props.renderMenu} >Menu</button>
                <form>
                    <label>
                        Name:
                        <input className="input-form" type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default DeliveryOrder