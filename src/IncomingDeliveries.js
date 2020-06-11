import React , {Component}from "react";
import Menu from "./Menu";

class incomingDeliveries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incomingdeliveries: [],
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8080/incoming-deliveries";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({incomingdeliveries: data});
        console.log(this.state.incomingdeliveries)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.renderMenu} >myMenu</button>
                {this.state.incomingdeliveries.map(incomingdelivery =>
                    <div key={incomingdelivery.id}>{incomingdelivery.id}   status:{incomingdelivery.status}{incomingdelivery.incomingLineitems.map(lineitem =>
                        <div key={lineitem.id}>product:{lineitem.product.name}   quantity:{lineitem.quantity}   </div>)}</div>)}
            </div>
        );
    }
}

export default incomingDeliveries;