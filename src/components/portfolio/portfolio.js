import './portfolio.css'
import portfolio from '../../assests/happyboy.jpg'
import cryptokong from '../../assests/crypto_pic.avif'
import Afia from '../../assests/e-commerce.jpg'
import Momobook from '../../assests/momobook.png'


const Portfolio=()=>{
    return(<>
    <section id='portfolio' >
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
       
            <article className='portfolio__item'>
         <div className='portforlio__item-image'>
<img src={cryptokong}  className='portforlio__image' alt='portfolio-img'/>
         </div>
         <div className='portfolio-div'>
    <h3>CryptoKong </h3>
    <h5 className='text-light'>CryptoKong is a Platform that provides Crypto ethusiasts with up-to-date
    news,prices, charts about their favorite crypto coins.
    </h5>
    </div>
    <div className='portfolio__item-cta'>
    <a href='htpps://github.com/minospeed007' className='btn' target='_blank'>Github</a>
    <a href='htpps://github.com/minospeed007'className='btn btn-primary'target='_blank'>Live Demo</a>
     </div>
    </article>
    <article className='portfolio__item'>
         <div className='portforlio__item-image'>
         <img src={Momobook} className='portforlio__image' alt='portfolio-img'/>
         </div>
    
    <div className='portfolio-div'>
    <h3>Momobook </h3>
    <h5 className='text-light'>Momobook is an efficient software that help Mobile money Vendors to perform transaction 
     more efficiently. With Momobook, Vendors will no longer need to record transaction manually into a book.
    </h5>
    </div>
    <div className='portfolio__item-cta'>
    <a href='htpps://github.com/minospeed007' className='btn' target='_blank'>Github</a>
    <a href='htpps://github.com/minospeed007'className='btn btn-primary'target='_blank'>Live Demo</a>
     </div>
    </article>
    <article className='portfolio__item'>
         <div className='portforlio__item-image'>
         <img src={Afia} className='portforlio__image' alt='portfolio-img'/>
         </div>
         
    <div className='portfolio-div'>
    <h3>Afia </h3>
    <h5 className='text-light'>
     Afia is an Ecommerce website that offers secure and convinient shopping experiences to online shoppers.
    </h5>
    </div>
    <div className='portfolio__item-cta'>
    <a href='htpps://github.com/minospeed007' className='btn' target='_blank'>Github</a>
    <a href='htpps://github.com/minospeed007'className='btn btn-primary'target='_blank'>Live Demo</a>
     </div>
    </article>
    
    
   
        </div>
    </section>
    </>)
}
export default Portfolio
