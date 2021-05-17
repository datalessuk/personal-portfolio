import '../styles/Projects.scss'
import gitIcon from "../Icons/git-alt-brands.svg";

import personalImage from '../img/Project-img/personal.PNG';
function Projects(props){

    
    return(
        
        <div className="projects-container">
            <section id="projects">
            <div className="heading-container">
            <h1 className="projects-heading">{props.mainHeading}</h1>
            <h2>{props.subHeading}</h2>
            </div>
          
        <div className="project-container">

            <div className="col-1">
            <h3>{props.title}</h3>
            <br />
            <img src={props.image} alt="My Site image"/>
            <br/>
            <a href={props.link}><img className="icon" src={gitIcon}></img>View Source</a>
            
            <br />
            <h4>Technologies Used</h4>
            <ul>
                <li>ReactJS</li>
                <li>CSS</li>
                <li>NodeJS</li>
                <li>Sass</li>
                <li>HTML5</li>
            </ul>
            </div>
            <div className="col-2">
           <h4>Overview</h4>
           <p>{props.info}</p>
           <p>{props.infoSecondLine}</p>
            </div>
        </div>
        </section>
        </div>
    )
}



export default Projects;