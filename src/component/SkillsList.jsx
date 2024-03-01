
function MesCompetences ({id, name, bibliotheque}) {
    return (
        <div key={id}>
            <article>
                <span>{name}</span>
                <span>{bibliotheque}</span>
            </article>
        </div>
    )
}
export default MesCompetences