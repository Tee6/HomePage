import "../styles/cvcard.css";
import "../styles/skillcard.css";
import { Skillentry } from "../stores/CVStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SkillCard({ entry }: { entry: Skillentry }) {
  const { title, description, } = entry;

  return (
    <div className="glassCard card skillcard cv-entry-card">
      <a className="cv-image skill-card-image-min-height" target="_blank" rel="noopener noreferrer">
        {typeof entry.icon === "string" ? (
          <img src={entry.icon} alt={title} style={{ width: "100%" }} />
        ) : (
          <FontAwesomeIcon icon={entry.icon} style={{ fontSize: "100px" }} />
        )}
      </a>
      <div className="cv-content">
        <h2 className="cv-paragraph cv-title">{title}</h2>
        <p className="cv-paragraph">{description}</p>
      </div>
    </div>
  );
}

export default SkillCard;
