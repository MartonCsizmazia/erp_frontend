import React , {Component}from "react";

import './main.css';
import './bootstrap.min.css';
import Stock from "./Stock";

class Expense extends Component {

    constructor(props){
        super(props);
        this.state = {
            expenses: []
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8080/expenses";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({expenses: data});
        console.log(this.state.expenses)
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
                                        <th className="column100 column1" data-column="column1">Product</th>
                                        <th className="column100 column2" data-column="column2">Id</th>
                                        <th className="column100 column4" data-column="column4">Price</th>
                                        <th className="column100 column5" data-column="column5">Profit</th>
                                        <th className="column100 column6" data-column="column6">Manufacturer</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.products.map(product =>
                                        <tr className="row100" key={product.id}>
                                            <td className="column100 column1" data-column="column1">{product.name}</td>
                                            <td className="column100 column2" data-column="column1">{product.id}</td>
                                            <td className="column100 column3" data-column="column1">{product.price}</td>
                                            <td className="column100 column4" data-column="column1">{product.profit}</td>
                                            <td className="column100 column5" data-column="column1">{product.manufacturer}</td>
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

export default Expense;