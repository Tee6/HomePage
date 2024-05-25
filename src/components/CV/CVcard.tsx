import "../../styles/cvcard.css"
import {CVentry} from "../../stores/CVStore"

function CVentryCard({entry}: {entry: CVentry}){
    const isLearnMoreNotEmpty = entry.learnMore && entry.learnMore.trim() !== '';
    return(
        <div className="glassCard card cv-entry-card">
            <a className="cv-image" href={entry.link} target="_blank">
                <img className="cv-image" src={import.meta.env.BASE_URL + entry.picture} alt={entry.title} />
                </a>
            <div className="cv-content">
                <p className="cv-paragraph cv-title">{entry.title}</p>
                <p className="cv-paragraph">{entry.date}</p>
                <p className="cv-paragraph">{entry.description}</p>

                {isLearnMoreNotEmpty && (
                    <a href={entry.learnMore}>Mehr Erfahren</a>
                )}
            </div>
        </div>
    )
}

export default CVentryCard