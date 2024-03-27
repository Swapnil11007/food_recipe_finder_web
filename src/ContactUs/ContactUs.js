import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../components/navbar/Navbar';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., send data to backend, display success message)
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (

        <div>
            <Navbar />
            <div className="contact-us-container">
                <h2>Contact Us</h2>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <p>Thank you for your message!</p>
                )}
            </div> </div>
    );
};

export default ContactUs;
