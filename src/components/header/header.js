import CTA from './cta.js'
import ME from  '../../assests/happyboy.jpg'
import Headersocial from './headersocial'
import './header.css'
import  './header_about.css'
const Header=()=>{

    return(
    <header  >
    <div className='container header__cointainer' >
      <h5 className='text-light'>Hello! I am </h5> 
      <h1>Nonso Okeke</h1>
      <h5 className='text-light'>Full-stack Developer</h5>
      <CTA/>
      <Headersocial/>
      <div className='about__me'>
            <div className='about__image'>
                <img className='about__me-images' src={ME} alt=''/>
            </div>
            </div>
      
     <a href='#contact' className='scroll__down'>Scroll Down</a>

    </div>
    </header>
    )
}
export default Header
