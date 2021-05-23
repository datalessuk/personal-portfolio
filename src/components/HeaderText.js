import React from 'react'
import Popup from 'reactjs-popup';
import '../styles/Header.scss'

import gitIcon from "../Icons/github-icon.svg"
import emailIcon from '../Icons/email-icon.svg'
import linkinIcon from '../Icons/linkedin-icon.svg'
import paperIcon from '../Icons/paper-lcon.svg'


function HeaderText(){
    function popUp(){
        window.alert('placeholder@gmail.com');
    }


    return(
        
            
            <div className="links-container">
            <ul>
            <li><a href="https://github.com/datalessuk" target="_blank"><span><img className="icon" src={gitIcon}></img><br /></span>Github</a></li>
            <li><a href="https://www.linkedin.com/in/mark-harrison-2a0638193" target="_blank"><span><img className="icon" src={linkinIcon}></img><br /></span>Linkedin</a></li>
            <li>
                
                    <a href="#" onClick={popUp}><span><img className="icon" src={emailIcon}></img><br /></span>Email</a></li>
            
            <li><a href="https://github.com/datalessuk" target="_blank"><span><img className="icon" src={paperIcon}></img><br /></span>CV</a></li>
            </ul>
            </div>
        
    )
}
export default HeaderText;