import React from "react";

import $ from 'jquery';
import {Link} from "react-router-dom";

const Footer = props => {

    return (
        <footer>
            <div className="container text-center">
                <p>
                <hr/>
                <strong>
                    <Link to="/">Home</Link>
                    &nbsp;||&nbsp;
                    <Link to="showroom">Showroom</Link>
                    &nbsp;||&nbsp;
                    <Link to="tire_kicking">Tire Kicking</Link>
                    &nbsp;||&nbsp;
                    <Link to="livery">The Livery</Link>
                    &nbsp;||&nbsp;
                    <Link to="links">Links</Link>
                    &nbsp;||&nbsp;
                    <Link to="library">The Library</Link>
                </strong>
                </p>
                <p>
                    <strong>
                    Site Map
                    &nbsp;||&nbsp;
                    Contact Us
                    </strong>
                </p>
            </div>
        </footer>
    )
};


export default Footer;
