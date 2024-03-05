import { useEffect, useState } from 'react'
import Projets from '../Data/projets.json'
import './styleComponent/ModalReal.css'

function ModalReal({closeModal, id}) {

  const [projetsfilter, setProjetsfilter] = useState([])

  useEffect(() =>{
    const projetsfilter = Projets.filter(projet => projet.id === id)

    setProjetsfilter(projetsfilter)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <div className="overlay" onClick={closeModal}>
    </div>
    <div className="modale">
    {projetsfilter.map(projet => (
      <div className='modalecontent' key={projet.id}>
        <h2 className='titremodale'>{projet.title}</h2>
        <img src={projet.cover} alt={projet.alt} />
        <p>{projet.type}</p>
        <p>{projet.description}</p>
        <a href={projet.lien} target="_blank" rel="noopener noreferrer">Lien vers le site</a>
        <br/><a href={projet.lienGit} target="_blank" rel="noopener noreferrer">Lien vers le repository GitHub</a>
      </div>
    ))}
    <i className="fa-solid fa-xmark" onClick={closeModal}></i>
    </div>
    </>
  )
}
export default ModalReal
