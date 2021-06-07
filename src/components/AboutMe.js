import '../styles/Aboutme.scss'
import React,{useState} from 'react';





function AboutMe(){

    function getTodaysDay(){
        const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Firday','Saturday']
        let todaysDay = new Date();
        
        return weekDays[todaysDay.getDay()];

    }
    let todaysDay = getTodaysDay();
   
  
    const [showText,setText] = useState(false);

    return(
        <section id="aboutme">
        <div className="about-container">
            
            <h1>Profile</h1>
            <br />
            </div>
        <div className="flex-container">
            
         <div className="col-1">
         <h3>About me</h3>
                
                <ol>
                    <li onClick={()=>setText(!showText)}>Details</li>
                    <li onClick={()=>setText(!showText)}>Education & Skills</li>
                    
                </ol>
             </div>
             <div className="col-2">
            
            {!showText && <MyDetails />}
            {showText && <MyEdication  />}
             </div>
         </div>
         </section>
        
    )

    function MyDetails(){
        return(
            <React.Fragment>
                <div className="details-container">
                    <p>Thank you for viewing my site hope your having an amazing {todaysDay}. I’m a qualified developer with a strong interest in web technologies, i have good working knowledge of front end technologies with the goal of been a full stack developer in the future. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing applications.</p>
                    
                    <p>I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development technologys.</p>
                </div>
            </React.Fragment>
        )
    }
    function MyEdication(){
        return(
            <React.Fragment>
                <div className="education-container">
                    <p><span>University of Hull (2017-2020) </span> BSc Computer Science - Achieved Grade 2:1</p>
                    <span>Weymouth College (2016)</span> BTEC ICT level 3 with triple distinction star (D*D*D*)
                    <br />
                    <h4>Skills</h4>
                    <div className="skills-container">
                        <ul className="skills-list">
                        <li>HTML(5)</li>
                        <li>CSS(3)</li>
                        <li>SASS</li>
                        <li>JSON</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>XML</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>NodeJS</li>
                        </ul>
                        </div>
                       
                        <h4>Tools</h4>
                        <div className="tools-container">
                            <ul className="tools-list">
                                <li>Firefox</li>
                                <li>Chrome</li>
                                <li>MS Office</li>
                                <li>Notepad++</li>
                                <li>Visual Studio</li>
                                <li>Visual Studio Code</li>
                                <li>Android Studio</li>
                                <li>Git</li>
                                <li>Subversion</li>
                            </ul>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default AboutMe;