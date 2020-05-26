import React from 'react';
import emailjs from 'emailjs-com';

import $ from 'jquery';

export default function ContactUs() {

    (function(){
        emailjs.init("user_kKeBaBdESQNzKvoWXY5Pg");
    })();

    function showLoading() {
        $("#loadingGIF").show();
    }

    function sendEmail(e) {
        e.preventDefault();
        e.target.elements.contact_number.value = Math.random() * 100000 | 0;
        showLoading();
        emailjs.sendForm("default_service", "pops_garage_inquiry", e.target)
            .then((result) => {
                console.log("Email sent");
                window.location="/contact_us/thank_you";
            }, (error) => {
                console.log("Email error: " + error.text);
                window.location="/contact_us/email_error";
            });
    }

    return (
        <section>
            <div className="container contact-container">

                <h1>Contact Us</h1>

                <h4>Thank you for your interest in Pop's Garage</h4>

                <div>

                <form id="inquiry_form" className="contact-form" onSubmit={sendEmail}>

                    <div className="" style={{textAlign: "center"}}>
                        <input type="hidden" name="contact_number" />

                        <label className="form-label text-left">Name:* <input type="text" name="name" required /></label>

                        <label className="form-label text-left">Email:* <input type="email" name="email" required /></label>

                        <label className="form-label text-left">Phone: <input type="tel" name="phone" /></label>

                        <label className="form-label text-left">How can we help you?* <textarea name="comments"required /></label>

                        <p>* = required</p>

                        <input type="submit" className="btn btn-primary" value="Send"/>
                        <img id="loadingGIF" src="https://media.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif" alt="Spinning animated GIF"/>
                        <input type="reset" className="btn btn-secondary" value="Reset Form"/>

                    </div>

                </form>

                </div>

            </div>

        </section>
    );
}