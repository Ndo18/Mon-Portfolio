import { useState } from 'react';
import Projets from '../Data/projets.json';
import Realisation from './Realisations';
import Tags from './Tags';
import './styleComponent/MesProjets.css'
import { createPortal } from 'react-dom';
import ModalReal from './ModalReal';

function MesProjets({children}) {
  const [showModal, setShowModal] = useState(false)

  return (
      <div className="mesrealisations">
        {children}
      <div className="TagsContainer">
        {Projets.map(projet => (
          <div className='Tags' key={projet.id}>
            <Tags tags={projet.type} />
          </div>
        ))}
      </div>
      <div className="RealisationsContainer">
        {Projets.map(projet => (
          <article onClick={() => setShowModal(projet.id)} className="MesProjets" key={projet.id}>
              <Realisation key={projet.title} 
                title={projet.title} 
                logo={projet.logo} 
                alt={projet.alt} 
                id={projet.id}
                icone={projet.icone}
                icone2={projet.icone2}
                />
          </article>
        ))}
        {showModal &&
          createPortal(<ModalReal closeModal={() => setShowModal(false)} id={showModal}/>, document.body)}
      </div>
    </div>
  );
}

export default MesProjets;
