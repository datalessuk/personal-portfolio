import config from '../components/chatBot/config';
import ActionProvider from '../components/chatBot/ActionProvider';
import MessageParser from '../components/chatBot/MessageParser';
import Chatbot from "react-chatbot-kit";




import '../styles/toggleButton.scss'
import React from 'react';
import { useState } from 'react'

function ChatButton(){

    const [showBot, toggleBot] = useState(false);
   
    
    return(
        
            
    <div className="chatMenu">
        
        {showBot && (< Chatbot config ={config} messageParser={MessageParser} actionProvider={ActionProvider} />)}

        <button onClick={()=> toggleBot((prev)=> !prev)} className="toggle-button"></button>
       
    </div>

        
     
        
        
        
    )
}
export default ChatButton;