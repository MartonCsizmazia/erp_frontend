import React, {Component} from "react";
import Menu from "./Menu";
import Stock from "./Stock";
import Product from "./Product";
import Expense from "./Expense";
import DeliveryOrder from "./DeliveryOrder";
import Customers from "./Customers";
import IncomingDeliveries from "./IncomingDeliveries";
import Suppliers from "./Suppliers";
import Employees from "./Employees";
import './App.css';


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

    renderProducts = () =>{
        this.setState({
            switcher:1
        })
    }

    renderIncomingDeliveries = () =>{
        this.setState({
            switcher:2
        })
    }

    renderStock = () =>{
        this.setState({
            switcher:3
        })
    }

    renderExpense = () =>{
        this.setState({
            switcher:4
        })
    }

    renderDeliveryOrder = () =>{
        this.setState({
            switcher:5
        })
    }

    renderCustomers = () =>{
        this.setState({
            switcher:6
        })
    }

    renderSuppliers = () =>{
        this.setState({
            switcher:7
        })
    }

    renderEmployees = () =>{
        this.setState({
            switcher:8
        })
    }
    //{this.state.products.map(product => <div>{product.name}</div>)}
    render() {
        return (
            <div >
                {this.state.switcher === 0 ?(
                    <Menu renderProducts={this.renderProducts}
                          renderIncomingDeliveries={this.renderIncomingDeliveries}
                          renderStock={this.renderStock}
                          renderExpense={this.renderExpense}
                          renderDeliveryOrder={this.renderDeliveryOrder}
                          renderCustomers={this.renderCustomers}
                          renderSuppliers={this.renderSuppliers}
                          renderEmployees={this.renderEmployees}
                    />
                ) : null}

                {this.state.switcher === 1 ?(
                    <Product renderMenu={this.renderMenu}/>
                ) : null}

                {this.state.switcher === 2 ?(
                    <IncomingDeliveries renderMenu={this.renderMenu}/>
                ) : null}

                {this.state.switcher === 3 ?(
                    <Stock renderMenu={this.renderMenu}
                           renderProducts={this.renderProducts}
                    />
                ) : null}

                {this.state.switcher === 4 ?(
                    <Expense renderMenu={this.renderMenu}
                    />
                ) : null}

                {this.state.switcher === 5 ?(
                    <DeliveryOrder renderMenu={this.renderMenu}
                    />
                ) : null}

                {this.state.switcher === 6 ?(
                    <Customers renderMenu={this.renderMenu}
                    />
                ) : null}

                {this.state.switcher === 7 ?(
                    <Suppliers renderMenu={this.renderMenu}
                    />
                ) : null}

                {this.state.switcher === 8 ?(
                    <Employees renderMenu={this.renderMenu}
                    />
                ) : null}
            </div>

        );
    }
}

export default App;