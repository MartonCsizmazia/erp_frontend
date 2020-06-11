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
            <button onClick={this.props.renderMenu} >Menu</button>
                <div className="limiter">
                    <div className="container-table100">
                        <div className="wrap-table100">
                            <div className="table100 ver6 m-b-110">
                                <table data-vertable="ver6">
                                    <thead>
                                    <tr className="row100 head">
                                        <th className="column100 column1" data-column="column1">Id</th>
                                        <th className="column100 column1" data-column="column1">Status</th>
                                        <th className="column100 column2" data-column="column1">Cargo</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.incomingdeliveries.map(incomingdelivery =>
                                        <tr className="row100" key={incomingdelivery.id}>
                                            <td className="column100 column1" data-column="column1" >{incomingdelivery.id}</td>
                                            <td className="column100 column1" data-column="column1" >{incomingdelivery.status}</td>
                                            {incomingdelivery.incomingLineitems.map(lineitem =>
                                                <td className="column100 column2" data-column="column1" key={lineitem.id}>{lineitem.product.name} {lineitem.quantity}</td>
                                            )}
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default incomingDeliveries;