import { createChatBotMessage } from "react-chatbot-kit";
import Options from '../Options'
import Weather from '../Weather'

const config = {
  botName:'Marks Bot',
  initialMessages: [
    createChatBotMessage(`Welcome Marks personal portfolio`,{
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