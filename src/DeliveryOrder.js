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

    sendCredentials = () => {
        axios.post("http://localhost:8080/auth/signin", {
            "username": this.state.username,
            "password": this.state.password
        })
            .then(
                res => {
                    console.log(res.data);
                    localStorage.setItem('token', res.data.token);
                    this.setRedirect();
                })
            .catch(error => alert(error));
    }

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !==""){
            const items = [...this.state.incomingLineitems, newItem];
            this.setState({
                items: items,
                currentItem:{
                    text:'',
                    text2:'',
                    key:''
                }
            })
        }
    }

    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    setUpdate(text,key) {
        console.log("items:" + this.state.items);
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) {
                console.log(item.key + "    " + key)
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
    }

    tick() {
        this.setState(
            {timeToWait: (this.state.timeToWait-1000 <= 0 ? 0 : this.state.timeToWait-1000)}
        )
    }

    formattedTime = (milliseconds) => {
        return  msToTime(milliseconds);
    };

    calculateTimeToWait = () => {
        let registerTime = this.props.ticket.timeOfRegistration;
        let appointmentTime = this.props.ticket.estimatedTimeOfAppointment;
        return appointmentTime - registerTime;
    }





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

                    {/* form solution from earlier */}
                    {/*
                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input type="text"
                               placeholder="Enter task"
                               value= {this.state.currentItem.text}
                               onChange={this.handleInput} >

                        </input>
                        <input type="text"
                               placeholder="Enter task"
                               value= {this.state.currentItem.text2}
                               onChange={this.handleInput} >

                        </input>
                        <button type="submit">Add</button>
                    </form>

                    <p>{this.state.items.text}</p>
                    <p>{this.state.items.text2}</p>
                    */}
                </form>
            </div>
        );
    }

}

export default DeliveryOrder

function msToTime(duration) {
    let milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds; // + "." + milliseconds;
}