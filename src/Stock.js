import React , {Component}from "react";

import './main.css';
import './bootstrap.min.css';

class Stock extends Component {

    constructor(props){
        super(props);
        this.state = {
            stock: {
                stockLineitems: []
            },
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8080/stock";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        this.setState({stock: data});
        console.log(this.state.stock)
    }


/*
    componentDidMount() {
        fetch("http://localhost:8080/stock")
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data =>
            {
                this.setState({
                    stock : data
                })
            })
    }

 */

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
                                        <th className="column100 column2" data-column="column2">Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.stock.stockLineitems.map(stockLineitem =>
                                        <tr className="row100" key={stockLineitem.id}>
                                            <td onClick={this.props.renderProducts} className="column100 column1 pointer" data-column="column1" >{stockLineitem.product.name}</td>
                                            <td className="column100 column2" data-column="column1">{stockLineitem.quantity}</td>
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

export default Stock;