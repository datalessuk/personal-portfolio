import '../styles/Contact.scss';
import emailjs from 'emailjs-com';

import { useState } from 'react';
import { useForm } from "react-hook-form";

export default function ContactMe(){

        //const [value,setValue] 

        //type FormValues = {
            //name:string;
            //email:string;
            //subject:string;
            //message:string;
        //}
    
        function sendEmail(e){
            //e.preventDefault();

           emailjs.sendForm('service_28zam0o', 'template_03yridi', e.target, 'user_fia3MXBLdB6QY75QEyvUR')
             .then((result) => {
                 console.log(result.text);
             }, (error) => {
                 console.log(error.text);
             });
           e.target.reset();//resets the form 
        }

        
        //<input type="submit" value="Send Message"/>
        //<form className="contact-form" onSubmit={sendEmail && handleSubmit && onSubmit} id='contact-form'>

        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data =>{
            console.log(data);

            emailjs.sendForm('service_28zam0o', 'template_03yridi', '#contactform', 'user_fia3MXBLdB6QY75QEyvUR')
             .then((result) => {
                 console.log(result.text);
             }, (error) => {
                 console.log(error.text);
             });
           //e.target.reset()
        }
        
           
        console.log(watch("example"));
        return(
               <div className="email-container" id="contact">
                   <div className="heading"><h1>Contact Me</h1></div>
                   <form className="contact-form" id='contactform' onSubmit={handleSubmit(onSubmit)} >

                   {errors.from_name && errors.from_name.type === "required" && (
                    <div role="alert">Name is required<br/></div>
                    )}
                   <input type="text" placeholder="Name" id="text-input" name="from_name" {...register("name",{required:true})}/>
                   
                   
                   <br />
                   <input type="text" placeholder="Email Address" id="text-input" name="email" 
                   {...register('email',{pattern:/^[^\s@]+@[^\s@]+$/})}
                   />

                   <br />
                   <input type="text" placeholder="Subject" id="text-input" name="subject" />
                   <br />
                   <textarea type="text" placeholder="Message" id="message-input" name="message" />
                   <br />
                   <div className="button">
                       <br />
                       <input type="submit" value="Send Message"/>
                   
                   </div>
                   
                   
                   </form>
               </div>
           )
       }
