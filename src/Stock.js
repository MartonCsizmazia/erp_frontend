import React , {Component}from "react";
import Menu from "./Menu";

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
        console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")
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
                {this.state.stock.stockLineitems.map(stockLineitem =>
                    <div key={stockLineitem.id}>product: {stockLineitem.product.name}  quantity: {stockLineitem.quantity}</div>)}
            </div>
        );
    }
}

export default Stock;