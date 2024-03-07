import { createPortal } from "react-dom"
import ModaleReal from './ModalReal'
import { useState } from "react"


function Realisation ({title, logo, alt, id}){
    const [showModal, setShowModal] = useState(false)

    return(
    <>
        <img src={logo} alt={alt} />
        <h3 onClick={() => setShowModal(true)}>{title}</h3>
        {showModal &&
        createPortal(<ModaleReal closeModal={() => setShowModal(false)} id={id}/>, document.body)}
    </>
    )
}
export default Realisation