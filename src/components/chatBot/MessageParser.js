class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)

      const lowercase = message.toLowerCase();
      

      if(lowercase.includes('hello')){
          this.actionProvider.greet();
      }
      if(lowercase.includes('good thanks')){
          this.actionProvider.greetBack();
      
      }
      if(lowercase.includes('about me')){
        this.actionProvider.handleAboutMe();
      }
      if(lowercase.includes('weather')){
        this.actionProvider.handleWeather();
      }
      if(lowercase.includes('about this bot')){
        this.actionProvider.handleAbout();
      }
      
    }
  }
  
  export default MessageParser;
  