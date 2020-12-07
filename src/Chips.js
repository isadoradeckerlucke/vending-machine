import React from 'react';
import { Link } from "react-router-dom";


function Chips(){
    return (
        <div>
            <h1>chips!</h1>
            <img
                src="https://previews.123rf.com/images/rvlsoft/rvlsoft1108/rvlsoft110800019/10178611-single-potato-chip-close-up.jpg"
                alt="single potato chip"
            />

            <h1><Link to ='/'>back to the vending machine</Link></h1>

        </div>
    )
}

export default Chips;