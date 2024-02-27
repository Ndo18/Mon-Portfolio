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
        })

    return(
        <footer className="footer">
            <div><i className="fa-regular fa-copyright"></i> {currentYear} Samuel DOUMBE LOBE, Tous droits réservés.</div>
        </footer>
    )
}
export default Footer