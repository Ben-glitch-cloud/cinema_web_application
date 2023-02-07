import './navigation.scss'
import CompanyLogo from '../../images/vintage-logo.png'

function navigation(){
    return(
        <nav>
            <img src={CompanyLogo}></img>
            <ul>
                <li> 
                    <a href="/about" >About</a>  
                    <div className="underline"></div>
                </li>
                <li> 
                    <a href="/find">See Whats On</a>
                    <div className="underline"></div>
                </li>
                <li> 
                    <a href="/location">Locations</a>
                    <div className="underline"></div>
                </li>
                <li> 
                    <a href="/contact">Contact</a>
                    <div className="underline"></div>
                </li>
            </ul>
        </nav>
    )
}

export default navigation; 

