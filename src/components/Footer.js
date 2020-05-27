import React from "react";

import {Link} from "react-router-dom";

const Footer = (props) => {

    return (
        <footer id="footer-container">
            <div className="container text-center" style={{maxWidth: "80vw"}}>
                <hr/>
                <p>
                <strong>
                    <Link to="/">Home </Link>
                    |&nbsp;
                    <Link to="/showroom">Showroom </Link>
                    |&nbsp;
                    <Link to="/tire_kicking">Tire&nbsp;Kicking </Link>
                    |&nbsp;
                    <Link to="/livery">The&nbsp;Livery </Link>
                    |&nbsp;
                    <Link to="/links">Links </Link>
                    |&nbsp;
                    <Link to="/library">The&nbsp;Library </Link>
                    |&nbsp;
                    <Link to="/sitemap">Site&nbsp;Map </Link> 
                    |&nbsp;
                    <Link to="/contact_us">Contact&nbsp;Us </Link>
                </strong>
                </p>
            </div>
        </footer>
    )
};


export default Footer;
