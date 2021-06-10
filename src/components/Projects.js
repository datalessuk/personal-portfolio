import '../styles/Projects.scss'
import gitIcon from "../Icons/git-alt-brands.svg";
import liveIcon from '../Icons/laptop-solid.svg';

function Projects(props){

    
    return(
        <section id="projects">
        <div className="projects-container">
            <h1 className="projects-heading">{props.mainHeading}</h1>
            <h2>{props.subHeading}</h2>  
        </div>

        <div className="project-container">

            <div className="col-1">
            <h3>{props.title}</h3>
            <br />
            <img src={props.image} alt="Site"/>
            <br/>
            
            <a href={props.link} target="_blank" rel="noreferrer"><img className="icon" src={gitIcon} alt="icon" ></img>View Source</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            
            <a href={props.liveView} target="_black" rel="noreferrer" id={props.active}><img className="liveIcon" src={liveIcon} alt="icon" ></img> Live View</a>
            
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
           <div className="heading">
           <p>{props.info}</p>
           <p>{props.infoSecondLine}</p>
           </div>
            </div>
        </div>
        </section>
        
    )
}



export default Projects;