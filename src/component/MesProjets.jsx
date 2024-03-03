import Projets from '../Data/projets.json';
import Realisation from './Realisations';
import Tags from './Tags';

function MesProjets({children}) {
  return (
      <div>
        {children}
      <div className="TagsContainer">
        {Projets.map(projet => (
          <div key={projet.id}>
            <Tags tags={projet.type} />
          </div>
        ))}
      </div>
      <div className="RealisationsContainer">
        {Projets.map(projet => (
          <div className="MesProjets" key={projet.id}>
            <article>
              <Realisation key={projet.title} title={projet.title} id={projet.id}/>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MesProjets;
