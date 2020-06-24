import React from "react";

const Menu = ({score,
              renderStock,
              renderProducts,
              renderIncomingDeliveries,
              renderExpense,
              renderDeliveryOrder,
              renderCustomers,
              renderSuppliers}) => (
    <div className="score-board">
        <div className="menu"> Main {score} menu </div>

        <li><a href="#"><span><button onClick={renderCustomers} className="zoom">Customers</button></span></a></li>
        <li><a href="#"><span><button onClick={renderExpense} className="zoom">Expenses</button></span></a></li>
        <li><a href="#"><span><button onClick={renderProducts} className="zoom">Products</button></span></a></li>
        <li><a href="#"><span><button onClick={renderDeliveryOrder} className="zoom">Order a new delivery</button></span></a></li>
        <li><a href="#"><span><button onClick={renderIncomingDeliveries} className="zoom">Incoming deliveries</button> </span></a></li>
        <li><a href="#"><span><button onClick={renderStock} className="zoom">Stock</button></span></a></li>
        <li><a href="#"><span><button className="zoom">Employee</button></span></a></li>
        <li><a href="#"><span><button onClick={renderSuppliers} className="zoom">Suppliers</button></span></a></li>
    </div>
);

export default Menu;