
function Realisation ({title, logo, alt, icone, icone2}){

    return(
    <>
        <img src={logo} alt={alt} />
        <h3>{title}</h3>
        <div className="iconetech">
            <i className={icone}></i>
            <i className={icone2}></i>
        </div>
    </>
    )
}
export default Realisation