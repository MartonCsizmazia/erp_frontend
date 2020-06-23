import React, {Component} from "react";
import axios from 'axios';
import './App.css';

class DeliveryOrder extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        const delivery = {
            name: this.state.name,
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
                <form>
                    <label>
                        Name:
                        <input className="input-form" type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default DeliveryOrder