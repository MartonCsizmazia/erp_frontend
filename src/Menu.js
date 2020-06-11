import React from "react";

const Menu = ({score,
              renderStock,
              renderProducts,
              renderIncomingDeliveries}) => (
    <div className="score-board">
        <div className="menu"> Main {score} menu </div>

        <li><a href="#"><span ><button className="zoom">Customers</button></span></a></li>
        <li><a href="#"><span><button className="zoom">Expenses</button></span></a></li>
        <li><a href="#"><span><button onClick={renderProducts} className="zoom">Products</button></span></a></li>
        <li><a href="#"><span><button onClick={renderIncomingDeliveries} className="zoom">Incoming deliveries</button> </span></a></li>
        <li><a href="#"><span><button onClick={renderStock} className="zoom">Stock</button></span></a></li>
        <li><a href="#"><span><button className="zoom">Employee</button></span></a></li>
        <li><a href="#"><span><button className="zoom">Supplier</button></span></a></li>
    </div>
);

export default Menu;