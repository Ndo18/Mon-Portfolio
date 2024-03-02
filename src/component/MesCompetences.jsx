import Competences from '../Data/competences.json'
import SkillsList from './SkillsList'

function MesCompetences ({children}){
    return (
        <div>
        <h1>Mes Compétences</h1>
        {children}
        {Competences.map((competence) =>(
            <SkillsList key={competence.id}
            id={competence.id}
            name={competence.name}
            bibliotheque={Array.isArray(competence.bibliotheque) ? competence.bibliotheque.map(library => library.name) : []}
            />
            ))
        }
        </div>
        )
    }
    export default MesCompetences