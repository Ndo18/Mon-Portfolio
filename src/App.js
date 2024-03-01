import { ContactForm } from './component/ContactForm';
import Footer from './component/Footer';
import SkillsList from './component/SkillsList';
import MesProjets from './component/MesProjets';
import Navbar from './component/Navbar';
import Presentation from './component/Presentation';
import Competences from './Data/competences.json'
import MesCompetences from './component/MesCompetences';


function App() {
  return(
    <>
    <Navbar />
    <Presentation />
    <MesProjets />
    <MesCompetences>
      <h2>Front End</h2>
    {Competences.map((competence) =>(
      <SkillsList key={competence.id}
      id={competence.id}
      name={competence.name}
      bibliotheque={Array.isArray(competence.bibliotheque) ? competence.bibliotheque.map(library => library.name) : []}
      />
))
}
    </MesCompetences>
    <ContactForm />
    <Footer />
    </>
  )
}

export default App;
