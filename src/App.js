
import './App.scss';
import './components/Header'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton'



import personalImage from './img/Project-img/personal.PNG'
import whenToWake from './img/Project-img/whentowakeup.PNG'

function App(props) {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects title="Personal Portfolio" mainHeading={"Projects"} subHeading={"Small collection of my projects"}  image={personalImage} info="My Personal Portfolio made with React with Vanilla HTML5 and Sass. I made this to display my portfolio of work."infoSecondLine='Chat bot is build with the React-chatbot-kit, with the Openweathermap API for live weather stats that shows the live weather in London.' link={'https://github.com/datalessuk/personal-portfolio'}/>
      <Projects title="When to wake up"
       image={whenToWake} info="An app that calculates the perfect time to wake up in the morning feeling well rested and ready for the day. Based on the average time it takes to fall asleep" link={'#'}/>
      <ChatButton />
      <Footer />
    </div>
  );
}

export default App;
