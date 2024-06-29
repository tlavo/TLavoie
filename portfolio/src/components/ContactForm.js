import React, { useRef, useEffect } from 'react';
import './ContactForm.css';
import li from '../media/linkedin.png';
import ig from '../media/instagram.png';
import pi from '../media/pinterest.png';
import arrow from '../media/arrow.png';

function ContactForm() {
    const formRef = useRef(null);
    const resultRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;
        const result = resultRef.current;

        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            result.innerHTML = "Please wait...";

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });
                const jsonResponse = await response.json();
                result.innerHTML = jsonResponse.message;

                if (response.status !== 200) {
                    console.log(response);
                }
            } catch (error) {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            }

            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        };

        form.addEventListener('submit', handleSubmit);

        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return (
        <div className="contact-container">
            <div className="contact-content">
                <form ref={formRef} method="POST" action="" className="contact-left" id="form">
                    <input type="hidden" name="access_key" value="97283245-1d2a-468c-8510-c1db528878b8"></input>
                    <input type="text" name="name" placeholder="Name" className="contact-inputs" required></input>
                    <input type="text" name="email" placeholder="Email" className="contact-inputs" required></input>
                    <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                    <div className="submit-section">
                        <button type="submit">Submit<img src={arrow} alt=""></img></button>
                        <div ref={resultRef} id="result"></div>
                    </div>
                </form>
                <div className="contact-right">
                    <div className="contact-liststyle">
                        <p className='contact-list'>
                            <img src={li} width="30" alt="linkedin icon"/> 
                            &nbsp;<a href="https://www.linkedin.com/in/teresa-lavoie-0a1a44264/" target="_blank" rel="noopener noreferrer">Teresa Lavoie</a>
                        </p>
                        <p className='contact-list'>
                            <img src={ig} width="30" alt="instagram icon"/> 
                            &nbsp;<a href="https://www.instagram.com/teresalavoie11/" target="_blank" rel="noopener noreferrer">teresalavoie11</a>
                        </p>
                        <p className='contact-list'>
                            <img src={pi} width="30" alt="pinterest icon"/> 
                            &nbsp;<a href="https://www.pinterest.ca/teresamarialavoie/" target="_blank" rel="noopener noreferrer">teresamarialavoie</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
