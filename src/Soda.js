import React from 'react';
import { Link } from "react-router-dom";


function Soda(){
    return (
        <div>
            <h1>soda!</h1>
            <img
                src="https://media.newyorker.com/photos/5b5f41f47f03a30b6ac579a6/master/pass/Heller-Diet-Coke.jpg"
                alt="diet coke can on yellow background"
            />
            <h1><Link to ='/'>back to the vending machine</Link></h1>

        </div>
    )
}

export default Soda;