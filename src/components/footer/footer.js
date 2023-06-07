import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer=()=>{
    return(<>
    <footer >
<a href="#" className='footer__logo'>Nonso</a> 
<ul className='permalinks'>
    <li><a href='#'></a></li>
    <li><a href='#about'></a></li>
    <li><a href='#experience'></a></li>
    <li><a href='#services'></a></li>
    <li><a href='#portfolio'></a></li>
    <li><a href='#testimonials'></a></li>
    <li><a href='#contact'></a></li>

</ul> 
<div className='footer__socials'>
    <a href='https://facebook.com'><FaFacebookF/></a>
    <a href='https://facebook.com'></a>
    <a href='https://telegram.com'><IoLogoTwitter/></a>


    </div> 
    <div className='footer__copyright'>
        <small>&copy; Nonso Okeke. All rights reserved.</small>
    </div>
 </footer>
    </>)
}
export default Footer
