import './styleComponent/Navbar.css'

function Navbar () {
    return(
        <header>
            <nav  className="navbar">
                <img src="Logo_code.png" alt="logo code" />
                <ul>
                    <li>
                        <a href="#Presentation">Présentation</a>
                    </li>
                    <li>
                        <a href="#Realisations">Réalisations</a>
                    </li>
                    {/* <li>
                        <a href="#Activites">Activités</a>
                    </li> */}
                    <li>
                        <a href="#Competences">Compétences</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li>
                        <a href="Samuel_DMB_CV_2023.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar