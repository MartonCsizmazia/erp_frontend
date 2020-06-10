import React, {Component} from "react";
//import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            answer: "YES"
        }
    }

    /*
    componentDidMount() {
        fetch("http://localhost:8080/products")
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data =>

            {
                this.setState({
                    products : data
                    })
                })
    }

    */

    async componentDidMount() {
        const url = "http://localhost:8080/products"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({products: data});
        console.log(this.state.products)
    }

    //{this.state.products.map(product => <div>{product.name}</div>)}
    render() {
        return (
            <div >
                {this.state.products.map(product => <div key={product.id}>{product.name}</div>)}
            </div>

        );
    }
}

export default App;