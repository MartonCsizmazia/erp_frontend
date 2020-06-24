import React , {Component}from "react";
import './main.css';
import './bootstrap.min.css';

class Suppliers extends Component {

    constructor(props){
        super(props);
        this.state = {
            suppliers: [],
        }
    }



    async componentDidMount() {
        const url = "http://localhost:8080/suppliers";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({suppliers: data});
        console.log(this.state.suppliers)
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
                                        <th className="column100 column1" data-column="column1">Name</th>
                                        <th className="column100 column2" data-column="column2">Address</th>
                                        <th className="column100 column4" data-column="column4">Rating</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.suppliers.map(supplier =>
                                        <tr className="row100" key={supplier.id}>
                                            <td className="column100 column1" data-column="column1">{supplier.name}</td>
                                            <td className="column100 column2" data-column="column1">{supplier.address}</td>
                                            <td className="column100 column3" data-column="column1">{supplier.rating}</td>
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

export default Suppliers;