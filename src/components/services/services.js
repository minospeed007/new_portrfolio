import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services=()=>{
    return(<>
    <section id='services' >
       <h5>What I Offer</h5>
       <h2>Services</h2>
       <div className='container services__container'>
        <article className='service'>
         <div className='service__head'>
            <h3>UI/UX Design</h3>
         </div>
         <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>User Experience</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>User Interface Design</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Responsive Design</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>User Research</p>
            </li>
           
         </ul>
        </article>
        <article className='service'>
         <div className='service__head'>
            <h3>Web Development</h3>
         </div>
         <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Top Notch Websites</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Websites Maintainance</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>SEO Optimization</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Performance Optimization</p>
            </li>
           
         </ul>
        </article>
        <article className='service'>
         <div className='service__head'>
            <h3>Content Creation</h3>
         </div>
         <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Documentation</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Information Architecture</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Editing and Proofreading</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Technical Writing</p>
            </li>
           
         </ul>
        </article>
       </div>

    </section>
    </>)
}
export default Services
