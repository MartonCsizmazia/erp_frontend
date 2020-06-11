import React from "react";

const Menu = ({score,
              renderStock,
              renderIncomingDeliveries}) => (
    <div className="score-board">
        <div className="score"> Main {score} menu </div>

        <li><a href="#"><span><button>Customers</button></span></a></li>
        <li><a href="#"><span><button>Expenses</button></span></a></li>
        <li><a href="#"><span><button>Products</button></span></a></li>
        <li><a href="#"><span><button onClick={renderIncomingDeliveries} >Incoming deliveries</button> </span></a></li>
        <li><a href="#"><span><button onClick={renderStock} >Stock</button></span></a></li>
        <li><a href="#"><span><button>Employee</button></span></a></li>
        <li><a href="#"><span><button>Supplier</button></span></a></li>
    </div>
);

export default Menu;