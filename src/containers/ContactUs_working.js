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

                    <h3 className="pageHead">Contact Us</h3>

                    <p>Thank you for your interest in Pop's Garage</p>

                    <p>How can we help you?</p>

                    <form id="general_inquiry" onSubmit="return validateForm()">

                        <table>
                            <tbody>

                            <tr>
                                <td colSpan="2">
                                    <input type="hidden" name="success"
                                           value="http://www.randybick.com/thank-you.html"/>
                                    <input type="hidden" name="contact_number"/>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-right">
                                    <label htmlFor="name">Name:</label>
                                </td>
                                <td>
                                    <input type="text" id="name" name="required-name" className="formfields" required autoFocus autocomplete placeholder="Name"/>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-right">
                                    <label htmlFor="phone">Phone Number:</label>
                                </td>
                                <td>
                                    <input type="tel" id="phone" name="required-phone" className="formfields" required placeholder="Phone"/>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-right">
                                    <label htmlFor="email">Email:</label>
                                </td>
                                <td>
                                    <input type="email" id="email" name="required-email" className="formfields" required autoComplete placeholder="Email"/>
                                </td>
                            </tr>

                            <tr>
                                <td className="text-right">
                                    <label htmlFor="comments">What can we do for you?:</label></td>
                                <td>
                                    <textarea id="comments" name="required-comments" className="commentbox" required/>
                                </td>
                            </tr>

                            <tr className="text-center">
                                <td>
                                    <input type="submit" className="btn btn-primary" value="Submit"/>
                                    <img id="loadingGIF" src="https://media.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif"/>
                                    <input type="reset" className="btn btn-secondary" value="Reset Form"/>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </form>
                </div>

            </section>
        )
    }
}


export default ContactUs