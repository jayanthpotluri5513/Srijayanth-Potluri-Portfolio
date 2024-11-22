import React, { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import './contact.css';
import axios from 'axios';
import shapeOne from '../../assets/shape-1.png';
const Contact = () => {
    const [form, setForm] = useState({
        name: '', 
        email: '', 
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://api.sheetbest.com/sheets/59ce38fd-fca0-46ae-938f-7bc7b9504f13',
            form
        ).then((response) => {

            console.log(response);
            setForm({
                name: '', 
                email: '', 
                subject: '',
                message: '',
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    };

    return (
        <section className="contact section" id='contact'>
            <h2 className="section__title text-cs">Contact Me</h2>
            <p className='section__subtitle'>
                Let's <span>Talk About Ideas</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">Flat No: 5513, Srila Towers, Hyderabad, India</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact__card-title">Ideas/Develop</h3>
                        <p className="contact__card-data">Available Right Now</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">srijayanthpotluri@gmail.com</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+91 9652481555</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label htmlFor="name" className="contact__form-tag text-cs">
                                Your Full Name <b>*</b>
                            </label>
                            <input 
                                type="text" 
                                name='name' 
                                onChange={handleChange}
                                value={form.name} 
                                className="contact__form-input" 
                            />
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="email" className="contact__form-tag text-cs">
                                Your Email Address <b>*</b>
                            </label>
                            <input 
                                type="email"  
                                name='email' 
                                onChange={handleChange}
                                value={form.email} 
                                className="contact__form-input" 
                            />
                        </div>
                        <div className="contact__form-div" style={{ gridColumn: "span 2" }}>
                            <label htmlFor="subject" className="contact__form-tag text-cs">
                                Your Subject <b>*</b>
                            </label>
                            <input 
                                type="text"  
                                name='subject' 
                                onChange={handleChange}
                                value={form.subject} 
                                className="contact__form-input" 
                            />
                        </div>
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label htmlFor="message" className="contact__form-tag text-cs">
                            Your Message <b>*</b>
                        </label>
                        <textarea  
                            name='message' 
                            onChange={handleChange}
                            value={form.message} 
                            className="contact__form-input contact__form-textarea"
                        />
                    </div>
                    <div className="contact__submit">
                        <p>* Accept the terms and conditions.</p>
                        <button type='submit' className='btn text-cs'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <div className="section__deco deco__right">
             <img src={shapeOne} alt='' className='shape' />
            </div>
            <div className="section__bg-wrapper">
                <span className="bg__title">Contact</span>
            </div>
        </section>
    );
};

export default Contact;
