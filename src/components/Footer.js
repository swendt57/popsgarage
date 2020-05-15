import React from "react";

import {Link} from "react-router-dom";

const Footer = props => {

    return (
        <footer>
            <div className="container text-center" style={{maxWidth: "80vw"}}>
                <hr/>
                <p>
                <strong>
                    <Link to="/">Home </Link>
                    |&nbsp;
                    <Link to="/showroom">Showroom</Link>
                    |&nbsp;
                    <Link to="/tire_kicking">Tire&nbsp;Kicking </Link>
                    |&nbsp;
                    <Link to="/livery">The&nbsp;Livery </Link>
                    |&nbsp;
                    <Link to="/links">Links </Link>
                    |&nbsp;
                    <Link to="/library">The&nbsp;Library </Link>
                    |&nbsp;
                    <span>Site&nbsp;Map </span>
                    |&nbsp;
                    <span>Contact&nbsp;Us </span>
                </strong>
                </p>
            </div>
        </footer>
    )
};


export default Footer;
