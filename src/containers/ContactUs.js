import React, {Component} from "react";

class ContactUs extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (

            <section>
                <div className="container contact-container">

                    <h1 className="pageHead">Contact Us</h1>

                    <h2>Coming Soon!</h2>

                </div>

            </section>
        )
    }
}


export default ContactUs