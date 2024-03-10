import Competences from '../Data/competences.json'
import SkillsList from './SkillsList'
import './styleComponent/MesCompetences.css'

function MesCompetences (){
    return (
        <div className='competencesContainer'>
        <h1 id='Competences'>Mes Compétences</h1>
        <div className='mescompetences'> 
        {Competences.map((competence) =>(
            <SkillsList key={competence.id}
            id={competence.id}
            name={competence.name}
            logo={competence.logo}
            />
            ))
        }
        </div>
        </div>
        )
    }
    export default MesCompetences