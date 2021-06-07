
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc; 
      this.createClientMessage = createClientMessage;
    }
  
    greet = ()=>{
        const message = this.createChatBotMessage('Hello how are you today?');
        this.addChatBotMessageToState(message);

    }
    greetBack = ()=>{
        const message = this.createChatBotMessage('Great! Hope you are enjoying my site')
        this.addChatBotMessageToState(message);
    }

    handleAboutMe = () =>{
        const message = this.createChatBotMessage(
            `Random facts about myself: Big horror film enthusiast, Metal Music lover (Avantasia ❤️), Part time gamer and a huge fan of role playing games & First person shooters!`,
            {
                widget:"about-me",
            }
        );
        this.addChatBotMessageToState(message); 
        }

    handleWeather = ()=>{
        
        const message = this.createChatBotMessage(
            `Todays temputure in london is:`,
            {
                widget:"weather",
            }
        );
        this.addChatBotMessageToState(message);
    }

    handleAbout = ()=>{
        const message = this.createChatBotMessage(
            `This bot is built using the core of react-chatbot kit by fredrikoseberg. For more information on this please visit fredrikoseberg.github.io `,
            {
                widget:"about",
            }
        

        );
        this.addChatBotMessageToState(message);
    }

    
   


    addChatBotMessageToState = (message)=>{
        this.setState(prevState =>({
            ...prevState,
            messages:[...prevState.messages,message],
               }));
    }
   
}
  
  export default ActionProvider;

  //Update the state of the chatbot