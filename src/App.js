import { ContactForm } from './component/ContactForm';
import Footer from './component/Footer';
import MesProjets from './component/MesProjets';
import Navbar from './component/Navbar';
import Presentation from './component/Presentation';
import MesCompetences from './component/MesCompetences';


function App() {
  return(
    <>
    <Navbar />
    <Presentation />
    <MesProjets>
      <h1>Mes Réalisations</h1>
    </MesProjets>
    <MesCompetences>
      <h2>Front End</h2>
    </MesCompetences>
    <ContactForm />
    <Footer />
    </>
  )
}

export default App;
