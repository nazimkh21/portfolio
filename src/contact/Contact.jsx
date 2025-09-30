import React, { useState } from 'react'
import './contact.css'
import Lottie from 'lottie-react'
// import axios from 'axios'
import contactAnimation from '../animation/contact.json'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState("");

    const [state, handleSubmit] = useForm("mgvlgelg");
      if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email: email,
    //         message: message,
    //     };
    //     try {
    //         const response = await axios.post("http://localhost:5000/contact", data,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         );

    //         const formspreeRes = await axios.post("https://formspree.io/f/mrbakqwo", data, {
    //             headers: { "Content-Type": "application/json" },

    //         });

    //         if (formspreeRes.status == 200) {
    //             setStatus("Message sent successfully");
    //         } else {
    //             setStatus("Message saved but email sending failed")
    //         }
    //         alert(response.data.message);
    //         setEmail("")
    //         setMessage("")

    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('There was an error sending your message.');
    //     }
    

    return (
        <section id="contact" className='contact-me'>
            <h1 className='title'>
                <span className='icon-mail'></span>
                Contact me
            </h1>
            <p className='sub-title'>
                Contact me for more information and Get notified when I publish something new
            </p>

            <div style={{ justifyContent: "space-between" }} className="flex">
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <label htmlFor="email">Email Adress :</label>
                        <input autoComplete='off' required type="email" name="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                          <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                    </div>

                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message :</label>
                        <textarea required id="message" name='message'  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                         <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button type="submit" className='submit' disabled={state.submitting}>Submit</button>
                </form>
                


                <Lottie className='contact-animation'
                    loop={true}
                    style={{ height: 355 }}
                    animationData={contactAnimation} />

            </div>
        </section>
    );

}

export default Contact 