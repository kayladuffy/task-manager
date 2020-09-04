import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    state = {
        title: '',
        content: ''
    }
    render() {
        return (
            <div className="container">
                <form id="fillout" onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Contact Us</h5>
                    <div className="input-field">
                        <label htmlFor="title">First Name</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Last Name</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Email</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Message</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pick lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>

            </div>
        )
    }
}


export default Form