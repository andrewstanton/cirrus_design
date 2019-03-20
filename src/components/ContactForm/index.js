import React, { Component } from 'react'

class ContactForm extends Component {
    state = {
        
    }

    render() {
        return (
            <form className="form" name="contact" action="/thanks/" data-netlify-recaptcha="true" data-netlify="true">
                <div className="form_input">
                    <label>Your Name *</label>
                    <input type="text" name="name" required />
                </div>
                
                <div className="form_input">
                    <label>Your Email *</label>
                    <input type="text" name="email" required />
                </div>
                
                <div className="form_input">
                    <label>What Can We Help You With? *</label>
                    <textarea name="message"></textarea>
                </div>

                <button className="btn btn--default btn--full" type="submit">
                    Start The Conversation
                </button>
            </form>
        );
    }
}

export default ContactForm
