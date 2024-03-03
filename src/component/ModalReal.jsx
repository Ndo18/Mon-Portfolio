import { useEffect, useState } from 'react'
import Projets from '../Data/projets.json'

function ModalReal({closeModal, id}) {

  const [projetsfilter, setProjetsfilter] = useState([])

  useEffect(() =>{
    const projetsfilter = Projets.filter(projet => projet.id === id)

    setProjetsfilter(projetsfilter)
    console.log("test", projetsfilter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <div className="overlay" onClick={closeModal}>
    </div>
    <div className="modale">
    {projetsfilter.map(projet => (
      <div className='modale' key={projet.id}>
        <img src={projet.cover} alt="Site Oh my Food !" />
        <span>{projet.type}</span>
        <p>{projet.description}</p>
        {/* <Link to={projet.lien}></Link> */}
      </div>
    ))}
    <i className="fa-solid fa-xmark" onClick={closeModal}></i>
    </div>
    </>
  )
}
export default ModalReal
