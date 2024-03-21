import './styleComponent/Presentation.css'

function Presentation () {
    return (
        <div className="presentation">
        <h1 id="Presentation">Présentation</h1>
        <div className='prescontainer'>
        <img src="ImgProfil.png" alt="Profil icone" />
        <article>
        <p>Diplomé d'un master en achats et fort d'une expérience de 4 ans en tant qu'acheteur, je me suis tourné vers le développement web
        depuis juin 2023. Je suis capable de réaliser la partie front-end de sites internet en utilisant différentes technologies que vous pouvez retrouver dans ma liste de <a href="#Competences">compétences</a>.
        Vous pouvez retrouver les différents <a href="#Realisations">projets</a> que j'ai réalisé, ainsi que mon parcours sur mon <a href="Samuel_DOUMBE_LOBE_CV_Canada.pdf" target="_blank" rel="noopener noreferrer">CV</a>.</p>
        </article>
        </div>
        </div>
        )
    }
    export default Presentation