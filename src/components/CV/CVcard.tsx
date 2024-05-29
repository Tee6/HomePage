import "../../styles/cvcard.css";
import { CVentry } from "../../stores/CVStore";

function CVentryCard({ entry }: { entry: CVentry }) {
  const { link, picture, title, date, description, learnMore } = entry;
  const isLearnMoreNotEmpty = learnMore && learnMore.trim() !== '';

  return (
    <div className="glassCard card cv-entry-card">
      <a className="cv-image" href={link} target="_blank" rel="noopener noreferrer">
        <img className="cv-image" src={picture} alt={title} />
      </a>
      <div className="cv-content">
        <h2 className="cv-paragraph cv-title">{title}</h2>
        <p className="cv-paragraph">{date}</p>
        <p className="cv-paragraph">{description}</p>

        {isLearnMoreNotEmpty && (
          <a href={learnMore}>Mehr Erfahren</a>
        )}
      </div>
    </div>
  );
}

export default CVentryCard;
