import React from "react";
import { Link } from "react-router-dom";


function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <img
        src="https://image.shutterstock.com/image-vector/vending-machine-snack-crackers-junk-260nw-1426114004.jpg"
        alt="cartoon vending machine"
      />

    <ul>
        <li><Link to ='/Chips'>get chips</Link></li>
        <li><Link to ='/Soda'>get a soda</Link></li>
        <li><Link to ='/Apple'>get an apple</Link></li>
    </ul>
    

    </div>
  );
}

export default VendingMachine;