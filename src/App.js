
import './App.scss';
import './components/Header'
import Chatbot from "react-chatbot-kit";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton'



import personalImage from './img/Project-img/personal.PNG'
import whenToWake from './img/Project-img/whentowakeup.PNG'

import config from '../src/components/chatBot/config';
import ActionProvider from '../src/components/chatBot/ActionProvider';
import MessageParser from '../src/components/chatBot/MessageParser';


import ChatBot from 'react-simple-chatbot';



function App(props) {

  
  
  return (
    <div className="App">
      <Header />
      <AboutMe />
      
    </div>
  );
}

export default App;
