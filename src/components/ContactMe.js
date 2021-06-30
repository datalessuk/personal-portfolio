import '../styles/Contact.scss';
import emailjs from 'emailjs-com';
import React from 'react';


export default function ContactMe(){


    
        function sendEmail(e){
            e.preventDefault();

           emailjs.sendForm('service_28zam0o', 'template_03yridi', e.target, 'user_fia3MXBLdB6QY75QEyvUR')
             .then((result) => {
                 console.log(result.text);
             }, (error) => {
                 console.log(error.text);
             });
           e.target.reset();//resets the form 
        }
        
           
           return(
               
               <div className="email-container" id="contact">
                   <div className="heading"><h1>Contact Me</h1></div>
                   <form className="contact-form" onSubmit={sendEmail}>
                   <input type="text" placeholder="Name" id="text-input" name="from_name"/>
                   <br />
                   <input type="text" placeholder="Email Address" id="text-input" name="email"/>
                   <br />
                   <input type="text" placeholder="Subject" id="text-input" name="subject"/>
                   <br />
                   <textarea type="text" placeholder="Message" id="message-input" name="message"/>
                   <br />
                   <div className="button">
                   <input type="submit" value="Send Message"/>
                   </div>
                   
                   
                   </form>
               </div>
           )
       }
