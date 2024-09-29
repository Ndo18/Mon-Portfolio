import './styleComponent/Presentation.css'

function Presentation () {
    return (
        <div className="presentation">
        <h1 id="Presentation">Présentation</h1>
        <div className='prescontainer'>
        <img src={`${process.env.PUBLIC_URL}/ImgProfil.png`} alt="Profil icone" />
        <article>
        <p>Bonjour, je suis Samuel, développeur front-end passionné par React.js ! En tant que freelance, j’ai créé des interfaces dynamiques et intégré des API REST sur divers projets.
        J’aime relever des défis techniques avec des solutions créatives, tout en offrant des expériences utilisateur intuitives.
        Je suis aussi capable de réaliser des projets full stack avec Node.js et MongoDB.
        N’hésitez pas à jeter un œil à mes <a href='#Realisations'>projets sur mon site</a> et <a href='https://github.com/Ndo18'>mon GitHub</a>. 
        <br></br>Je suis enthousiaste à l'idée de collaborer sur des projets innovants, contactez moi <a href='#Contact'>ici</a> !
        <br></br>À bientôt !</p>
        </article>
        </div>
        </div>
        )
    }
    export default Presentation