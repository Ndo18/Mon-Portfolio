import Competences from '../Data/competences.json'
import SkillsList from './SkillsList'

function MesCompetences ({children}){
    return (
        <div>
        <h1 id='Competences'>Mes Compétences</h1>
        {children}
        {Competences.map((competence) =>(
            <SkillsList key={competence.id}
            id={competence.id}
            name={competence.name}
            logo={competence.logo}
            bibliotheque={Array.isArray(competence.bibliotheque) ? competence.bibliotheque.map(library => library.name) : []}
            logotech={Array.isArray(competence.bibliotheque) ? competence.bibliotheque.map(library => library.logo) : []}
            />
            ))
        }
        </div>
        )
    }
    export default MesCompetences