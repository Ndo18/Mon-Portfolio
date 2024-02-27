import './styleComponent/Navbar.css'

function Navbar () {
    return(
        <header>
            <nav  className="navbar">
                <ul>
                    <li>
                        <a href="#Presenatation">Présentation</a>
                    </li>
                    <li>
                        <a href="#Realisation">Réalisations</a>
                    </li>
                    <li>
                        <a href="#Activites">Activités</a>
                    </li>
                    <li>
                        <a href="#Competences">Compétences</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li>
                        <a href="#CV">CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
export default Navbar