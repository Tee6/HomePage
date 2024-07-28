import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Portrait from "../assets/Portrait.png";
import {
  faLinkedin,
  faGithub,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faPhp,
  faPython,
  faRaspberryPi,
  faReact,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";

const GlassCard = () => {
  const socialMediaLinks = [
    { href: "https://www.linkedin.com/in/nikoleimegger/", icon: faLinkedin },
    { href: "https://github.com/Tee6", icon: faGithub },
  ];

  const skills = [
    faHtml5,
    faCss3Alt,
    faJs,
    faPhp,
    faGitAlt,
    faRaspberryPi,
    faPython,
    faReact,
    faVuejs,
  ];

  return (
    <div className="glassCard persona-card">
      <div className="card">
        <div className="card-image">
          <img className="portrait-img" src={Portrait} alt="Portrait" />
        </div>
        <div className="card-content">
          <h3 className="name-heading">Niko Leimegger</h3>
          <ul className="fun-facts">
            <li>Born on 08.11.2004</li>
            <li>Living in Austria</li>
            <li>Favourite Framework: Vuejs</li>
            <li>Currently not Working</li>
          </ul>
          <div className="card-social-media" style={{ display: "flex" }}>
            {socialMediaLinks.map((link, index) => (
              <a key={index} className="social-media" href={link.href}>
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
          <div className="card-social-media">
            {skills.map((icon, index) => (
              <a key={index} className="social-media">
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
