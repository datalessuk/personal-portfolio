import '../styles/Contact.scss';
import emailjs from 'emailjs-com';

import { useState } from 'react';
import { useForm } from "react-hook-form";

export default function ContactMe(){

    
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = (data,e) =>{
            console.log(data);

            emailjs.sendForm('service_28zam0o', 'template_03yridi', '#contactform', 'user_fia3MXBLdB6QY75QEyvUR')
             .then((result) => {
                 console.log(result.text);
             }, (error) => {
                 console.log(error.text);
             });
             e.target.reset();
        
        }
        //Please enter a subject
           
        console.log(watch("example"));
        return(
               <div className="email-container" id="contact">
                   <div className="heading"><h1>Contact Me</h1></div>
                   <form className="contact-form" id='contactform' onSubmit={handleSubmit(onSubmit)} >

                   
                   <input type="text" placeholder="Name" id="text-input" name="from_name" {...register("name",{required:true})}/>
                   {errors.name && errors.name.type === "required" && (
                    <div role="alert"><p>Name is required</p></div>
                    )}

                   <br />
                   <input type="text" placeholder="Email Address" id="text-input" name="email" 
                   {...register('email',{required:true,pattern:/^[^\s@]+@[^\s@]+$/})}/>
                   {errors.email && errors.email.type === "pattern" && (
                    <div role="alert"><p>Please enter a valid email address</p><br/></div>
                    )}

                   <br />
                   <input type="text" placeholder="Subject" id="text-input" name="subject"{...register("subject",{required:true})} />
                   {errors.subject && errors.subject.type === "required" && (
                    <div role="alert"><p>Subject Requied</p></div>
                    )}
                   <br />
                   
                   <textarea type="text" placeholder="Message" id="message-input" name="message"{...register('message',{required:true,minLength:20})}/>
                   {errors.message && errors.message.type ==='minLength'&&(
                       <div role="alert"><p>Please enter a message</p><br/></div>
                   )}

                   <br />
                   <div className="button">
                       <br />
                       <input type="submit" value="Send Message"/>
                   </div>
                   </form>
               </div>
           )
       }
