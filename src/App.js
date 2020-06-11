import React, {Component} from "react";
import Menu from "./Menu";
//import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            answer: "YES",
            switcher: 1
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

    renderStock = () =>{
        this.setState({
            switcher:0
        })
    }

    renderMenu = () =>{
        this.setState({
            switcher:0
        })
    }

    async componentDidMount() {
        const url = "http://localhost:8080/products";
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
                {this.state.switcher === 0 &&
                this.state.products.map(product => <div key={product.id}>{product.name}</div>)}

                {this.state.switcher === 1 ?(
                    <Menu renderStock={this.renderStock}/>
                ) : null}

            </div>

        );
    }
}

export default App;