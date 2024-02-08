import "../../styles/cvcard.css"
import {CVentry} from "../../stores/CVStore"

function CVentryCard({entry}: {entry: CVentry}){
    return(
        <div className="glassCard card cv-entry-card">
            <img src={entry.picture} alt={entry.title} />
            <h1>{entry.title}</h1>
            <h4>{entry.date}</h4>
            <p>{entry.description}</p>
        </div>
    )
}

export default CVentryCard