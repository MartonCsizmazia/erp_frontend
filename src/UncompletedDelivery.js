import React , {Component}from "react";

class UncompletedDelivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uncompleted: [],
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

}

export default UncompletedDelivery;