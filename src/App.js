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
    <MesProjets />
    <MesCompetences>
    </MesCompetences>
    <ContactForm />
    <Footer />
    </>
  )
}

export default App;
