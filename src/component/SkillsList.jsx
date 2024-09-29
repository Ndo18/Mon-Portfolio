import './styleComponent/SkillsList.css'

function MesCompetences ({id, name, logo}) {
    return (
        <div key={id}>
            <article className="skillscard">
                <div className='maintech'>
                    <img src={`${process.env.PUBLIC_URL}/${logo}`} alt={name} />
                    <p>{name}</p>
                </div>
                <div >
                </div>
            </article>
        </div>
    )
}
export default MesCompetences