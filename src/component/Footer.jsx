import { useEffect } from "react"
import { useState } from "react"
import './styleComponent/Footer.css'


function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
        useEffect(()=> {
            const intervalId = setInterval(() => {
                setCurrentYear(new Date().getFullYear)
            }, 1000 * 60 * 60 * 24 * 365)

            return () => clearInterval(intervalId)
        },[])

    return(
        <footer className="footer">
            <div className="lienReseaux">
                <a href="https://github.com/Ndo18"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/samuel-doumbe-lobe-a3a340151/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="copyright"><i className="fa-regular fa-copyright"></i> {currentYear} Samuel Doumbe Lobe, Tous droits réservés.</div>
        </footer>
    )
}
export default Footer