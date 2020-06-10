import React, {Component} from "react";
import './App.css';

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
}

export default App;