import React from 'react'
import '../styles/Header.scss'

import gitIcon from "../Icons/github-icon.svg"
import emailIcon from '../Icons/email-icon.svg'
import linkinIcon from '../Icons/linkedin-icon.svg'
import paperIcon from '../Icons/paper-lcon.svg'


function HeaderText(){
    function popUp(){
        window.alert('dataless@gmail.com');
    }
    return(
            <div className="links-container">
            <ul>
            <li><a href="https://github.com/datalessuk" target="_blank" rel="noreferrer"><span><img className="icon" src={gitIcon} alt="giticon"></img><br /></span>Github</a></li>
            <li><a href="https://www.linkedin.com/in/mark-harrison-2a0638193" target="_blank" rel="noreferrer"><span><img className="icon" src={linkinIcon} alt="linkicon"></img><br /></span>Linkedin</a></li>
            <li>
                
                    <a href="/#" onClick={popUp}><span><img className="icon" src={emailIcon} alt="emailicon"></img><br /></span>Email</a></li>
            
            <li><a href="https://docs.google.com/document/d/1bqzP03Xr_-BuTtTa-yZHlCCO_MQ7hWyeZGnIYVpM_14/edit?usp=sharing" target="_blank" rel="noreferrer"><span><img className="icon" src={paperIcon} alt="giticon"></img><br /></span>CV</a></li>
            </ul>
            </div>
    )
}
export default HeaderText;