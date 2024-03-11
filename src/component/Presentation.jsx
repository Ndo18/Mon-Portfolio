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
        Vous pouvez retrouver différents projets que j'ai réalisé, ainsi que mon parcours sur mon CV.</p>
        </article>
        </div>
        </div>
        )
    }
    export default Presentation