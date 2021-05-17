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
        <div className="about-container">
            <h1>Profile</h1>
            <br />
            <h2>I'm a Junior <span>F</span>ront end <span>D</span>eveloper</h2>
            <br />
        <div className="flex-container">
            
         <div className="col-1">

                <h3>All about me</h3>
                <ol>
                    <li onClick={()=>setText(!showText)}>Details</li>
                    <li onClick={()=>setText(!showText)}>Education</li>
                    
                </ol>
             </div>
             <div className="col-2">
            
            {!showText && <MyDetails />}
            {showText && <MyEdication  />}
             </div>
         </div>
        </div>
    )

    function MyDetails(){
        return(
            <React.Fragment>
                <div className="details-container">
                    <p>Thank you for viewing my site hope your having an amazing {todaysDay}. I am a Junior programmer with good knowledge of front-end and backend techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps.</p>
                    
                    <p>I love to spend time coding, listening to music die hard <span>Avantasia</span> fan.Big fan of horror films, mountain biking and gaming.</p>
                </div>
            </React.Fragment>
        )
    }
    function MyEdication(){
        return(
            <React.Fragment>
                <div className="education-container">
                    <p><span>University of Hull (2017-2020) </span> BSc Computer Science - Achieved grade 2:1
                    <br/>
                    <span>Weymouth College (2016)</span> BTEC ICT level 3 with triple distinction star (D*D*D*)
                    </p>
                </div>
            </React.Fragment>
        )
    }
    
}

export default AboutMe;