import React from 'react';
import { Link } from "react-router-dom";


function Apple(){
    return (
        <div>
            <h1>apple!</h1>
            <img
                src="https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png"
                alt="single apple"
            />

            <h1><Link to ='/'>back to the vending machine</Link></h1>

        </div>
    )
}

export default Apple;