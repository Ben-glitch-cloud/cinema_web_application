import './movie-slide.scss'

import Jaws from '../../images/Jaws-movie-imge.jpeg';
import Forbidden from '../../images/frankenstein.jpeg'; 
import Thing from '../../images/The-thing.webp';

function slider(){
    return(
        <div className="image-slider">
            <div className='single-image'>
                <img src={Jaws}></img>
            </div>
            <div className='single-image'>
                <img src={Forbidden}></img>
            </div>
            <div className='single-image'>
                <img src={Thing}></img>
            </div>
        </div>
    )
} 

export default slider;