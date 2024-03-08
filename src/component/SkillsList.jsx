
function MesCompetences ({id, name, bibliotheque, logo, logotech}) {
    return (
        <div key={id}>
            <article className="skillscard">
                <span>{name}<i className={logo}></i></span>
                <span>{bibliotheque}<i className={logotech}></i></span>
                <span></span>
            </article>
        </div>
    )
}
export default MesCompetences