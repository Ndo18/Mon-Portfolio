import './styleComponent/SkillsList.css'

function MesCompetences ({id, name, bibliotheque, logo, logotech}) {
    return (
        <div key={id}>
            <article className="skillscard">
                <div className='maintech'>
                    <img src={logo} alt=""/>
                    <p>{name}</p>
                </div>
                <div >
                </div>
            </article>
        </div>
    )
}
export default MesCompetences