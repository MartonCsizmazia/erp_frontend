import React, {Component} from "react";

import './App.css';

class DeliveryOrder extends Component{

    constructor(props){
        super(props);

    }

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