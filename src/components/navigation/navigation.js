import './navigation.scss'
import CompanyLogo from '../../images/vintage-logo.png'

function navigation(){
    return(
        <nav> 
            <div className='logo-name'>
                <img src={CompanyLogo}></img> 
                <div className='name-folder'>
                    <p id='message'></p>
                </div>
            </div>
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

