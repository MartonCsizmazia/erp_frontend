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

    getStyle() {
        return {
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
            minHeight: '2vh',
            maxWidth: 'content-box',
            padding: '20px'
        };
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
                                        <th className="column100 column2" data-column="column2">Value</th>
                                        <th className="column100 column2" data-column="column2">Paid</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.expenses.map(expense =>
                                        <tr className="row100" key={expense.id}>
                                            <td className="column100 column1" data-column="column1">{expense.name}</td>
                                            <td className="column100 column2" data-column="column1">{expense.value}</td>
                                            <td className="column100 column3" data-column="column1">{expense.paid.toString()}</td>

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