import { createChatBotMessage } from "react-chatbot-kit";
import Options from '../Options'
import Weather from '../Weather'

const config = {
  botName:'Marks Bot',
  initialMessages: [
    createChatBotMessage(`Welcome to Mark's Personal Portfolio! How may i assist you today? `,{
    widget:"options",
  }),

 ],


 widgets: [
  {
    widgetName: "options",
    widgetFunc: (props) => <Options {...props} />,
  },
  {
    widgetName:"weather",
    widgetFunc:(props)=> <Weather {...props} />,
    mapStateToProps:["weather"],
  }
],

state:{
  weather:[]
},

//widgets:[
  //{
    //widgetName:"weather",
    //widgetFunc:(props)=> <Weather{...props} />,
    //mapStateToProps:["weather"],
  //}
//],



}

export default config