import React , {Component}from "react";
import './main.css';
import './bootstrap.min.css';

class Customers extends Component {

    constructor(props){
        super(props);
        this.state = {
            customers: [],
        }
    }



    async componentDidMount() {
        const url = "http://localhost:8080/customers";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({customers: data});
        console.log(this.state.customers)
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
                                        <th className="column100 column2" data-column="column2">Email</th>
                                        <th className="column100 column4" data-column="column4">Phone number</th>
                                        <th className="column100 column5" data-column="column5">Date of registration</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.customers.map(customer =>
                                        <tr className="row100" key={customer.id}>
                                            <td className="column100 column1" data-column="column1">{customer.name}</td>
                                            <td className="column100 column2" data-column="column1">{customer.email}</td>
                                            <td className="column100 column3" data-column="column1">{customer.phoneNumber}</td>
                                            <td className="column100 column4" data-column="column1">{customer.dateOfRegistration}</td>

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

export default Customers;