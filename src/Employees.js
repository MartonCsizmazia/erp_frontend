import React , {Component}from "react";
import './main.css';
import './bootstrap.min.css';

class Employees extends Component {

    constructor(props){
        super(props);
        this.state = {
            employees: [],
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8080/employees";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({employees: data});
        console.log(this.state.employees)
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
                                        <th className="column100 column2" data-column="column2">Email</th>
                                        <th className="column100 column4" data-column="column4">Phone number</th>
                                        <th className="column100 column5" data-column="column5">Salary</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.employees.map(employee =>
                                        <tr className="row100" key={employee.id}>
                                            <td className="column100 column1" data-column="column1">{employee.name}</td>
                                            <td className="column100 column2" data-column="column1">{employee.email}</td>
                                            <td className="column100 column3" data-column="column1">{employee.phoneNumber}</td>
                                            <td className="column100 column4" data-column="column1">{employee.salary}</td>

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

export default Employees;