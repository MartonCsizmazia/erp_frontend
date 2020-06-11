import React from "react";

const Menu = ({score, playAgain, renderStock}) => (
    <div className="score-board">
        <div className="score"> You scored {score} from 5 questions! </div>
        <button className="playBtn" onClick={playAgain}>
            Play again!
        </button>
        <li><a href="#"><span><button>Customers</button></span></a></li>
        <li><a href="#"><span><button>Expenses</button></span></a></li>
        <li><a href="#"><span><button>Products</button></span></a></li>
        <li><a href="#"><span><button>Incoming deliveries</button> </span></a></li>
        <li><a href="#"><span><button onClick={renderStock} >Stock</button></span></a></li>
        <li><a href="#"><span><button>Employee</button></span></a></li>
        <li><a href="#"><span><button>Supplier</button></span></a></li>
    </div>
);

export default Menu;