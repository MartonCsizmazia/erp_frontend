import React , {Component}from "react";
import Menu from "./Menu";

class Product extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }



    async componentDidMount() {
        const url = "http://localhost:8080/products";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({products: data});
        console.log(this.state.products)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.renderMenu} >Menu</button>
                {this.state.products.map(product => <div key={product.id}>{product.name}</div>)}
            </div>
        );
    }
}

export default Product;