import React, { Component } from 'react'

class ContactForm extends Component {
    state = {
        name: null,
        email: null,
        message: null,   
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    isDisabled = () => {
        if(this.state.name !== null || this.state.email !== null || this.state.message !== null)
        {
            return false;
        }

        return true;
    }

    render() {
        return (
            <form className="form" name="contact" action="/thank-you" data-netlify-recaptcha="true" data-netlify="true">
                <div className="form_input">
                    <label>Your Name *</label>
                    <input type="text" name="name"
                        required onChange={ this.handleChange } />
                </div>
                
                <div className="form_input">
                    <label>Your Email *</label>
                    <input type="text" name="email"
                        required onChange={ this.handleChange } />
                </div>
                
                <div className="form_input">
                    <label>What Can We Help You With? *</label>
                    <textarea name="message"
                        required onChange={ this.handleChange }></textarea>
                </div>

                <button className="btn btn--default btn--full" type="submit"
                    disabled={ this.isDisabled() }>
                    Start The Conversation
                </button>
            </form>
        );
    }
}

export default ContactForm
