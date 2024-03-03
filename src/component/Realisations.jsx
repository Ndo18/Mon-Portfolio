import { createPortal } from "react-dom"
import ModaleReal from './ModalReal'
import { useState } from "react"


function Realisation ({title, id}){
    const [showModal, setShowModal] = useState(false)

    return(
    <>
        <p onClick={() => setShowModal(true)}>{title}</p>
        {showModal &&
        createPortal(<ModaleReal closeModal={() => setShowModal(false)} id={id}/>, document.body)}
    </>
    )
}
export default Realisation