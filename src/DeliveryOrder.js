import React, {Component} from "react";
import axios from 'axios';
import './App.css';

class DeliveryOrder extends Component{

    constructor(props){
        super(props);
        this.state = {
            incomingLineitems: [],
        }
    }

    handleChange = event =>{
        this.setState({incomingLineitems: event.target.value})
    };

    handleSubmit = event =>{
        event.preventDefault();

        const delivery = {
            incomingLineitems: this.state.incomingLineitems,
        };

        axios.post('localhost:8080/incoming-delivery/add', {delivery})
            .then(res =>{
                console.log(res);
                console.log(res.data)
            })
    };



    render() {
        return (
            <div>
                <button onClick={this.props.renderMenu} >Menu</button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Lineitems:
                        <input className="input-form" type="text" name="quantity" onChange={this.handleChange}/>
                        <input className="input-form" type="text" name="product" onChange={this.handleChange}/>
                    </label>
                    <button type="submit" >Add</button>
                </form>
            </div>
        );
    }

}

export default DeliveryOrder