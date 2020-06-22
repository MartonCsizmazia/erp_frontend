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


}

export default Expense;