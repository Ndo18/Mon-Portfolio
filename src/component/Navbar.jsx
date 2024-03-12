import { useState } from 'react'
import './styleComponent/Navbar.css'

function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => {
        setMenuOpen(false);
    }
    return(
        <header>
            <nav  className="navbar">
                <img src="Logo_code.png" alt="logo code" />
                <div className="menuburger" onClick={() => {
                    setMenuOpen(!menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <a href="#Presentation" onClick={closeMenu}>Présentation</a>
                    </li>
                    <li>
                        <a href="#Realisations" onClick={closeMenu}>Réalisations</a>
                    </li>
                    <li>
                        <a href="#Activites" onClick={closeMenu}>Activités</a>
                    </li>
                    <li>
                        <a href="#Competences" onClick={closeMenu}>Compétences</a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={closeMenu}>Contact</a>
                    </li>
                    <li>
                        <a href="Samuel_DMB_CV_2023.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar