import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faGitAlt} from "@fortawesome/free-brands-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faPhp} from "@fortawesome/free-brands-svg-icons";
import {faPython} from "@fortawesome/free-brands-svg-icons";
import {faRaspberryPi} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faVuejs} from "@fortawesome/free-brands-svg-icons";

function GlassCard(){
    
    return (
    <div className="glassCard">
        <div className="card">
            <div className="card-image">
                <img className="portrait-img" src="src\assets\Portrait.png" alt="Portrait" />
            </div>
            <div className="card-content">
                <h3 className="name-heading">Niko Leimegger</h3>
                <ul className="fun-facts">
                    <li>Born on 08.11.2004</li>
                    <li>Living in Austria</li>
                    <li>Favourite Framework: Vuejs</li>
                    <li>Currently working at McDonalds</li>
                </ul>
                <div className="card-social-media">
                <a className="social-media" href="https://www.linkedin.com/in/nikoleimegger/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="social-media" href="https://github.com/Tee6"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <div className="card-social-media">
                <a className="social-media"><FontAwesomeIcon icon={faHtml5} /></a>
                <a className="social-media"><FontAwesomeIcon icon={faCss3Alt} /></a>
                <a className="social-media"><FontAwesomeIcon icon={faJs} /></a>
                <a className="social-media"><FontAwesomeIcon icon={faPhp} /></a>
                <a className="social-media"><FontAwesomeIcon icon={faGitAlt} /></a>
                <a className="social-media"><FontAwesomeIcon icon={faRaspberryPi} /></a>
                <a className="social-media"><FontAwesomeIcon icon={faPython} /></a>
                <a className="social-media"><FontAwesomeIcon icon={faReact} /></a>
                <a className="social-media"><FontAwesomeIcon icon={faVuejs} /></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GlassCard;