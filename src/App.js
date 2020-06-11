import React, {Component} from "react";
import Menu from "./Menu";
import Stock from "./Stock";
import IncomingDeliveries from "./IncomingDeliveries";
//import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            answer: "YES",
            switcher: 0
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

    renderMenu = () =>{
        this.setState({
            switcher:0
        })
    }

    renderStock = () =>{
        this.setState({
            switcher:1
        })
    }

    renderIncomingDeliveries = () =>{
        this.setState({
            switcher:2
        })
    }

    //{this.state.products.map(product => <div>{product.name}</div>)}
    render() {
        return (
            <div >
                {this.state.switcher === 0 ?(
                    <Menu renderStock={this.renderStock}
                          renderIncomingDeliveries={this.renderIncomingDeliveries}
                    />
                ) : null}

                {this.state.switcher === 1 ?(
                    <Stock renderMenu={this.renderMenu}/>
                ) : null}

                {this.state.switcher === 2 ?(
                    <IncomingDeliveries renderMenu={this.renderMenu}/>
                ) : null}





            </div>

        );
    }
}

export default App;