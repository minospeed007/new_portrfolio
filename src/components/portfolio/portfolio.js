import './portfolio.css'
import portfolio from '../../assests/happyboy.jpg'

const Portfolio=()=>{
    return(<>
    <section id='portfolio' >
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
       
            <article className='portfolio__item'>
         <div className='portforlio__item-image'>
         <img src={portfolio} alt='portfolio-img'/>
         </div>
    <h3>This is the titleof my portfolio </h3>
    <div className='portfolio__item-cta'>
    <a href='htpps://github.com/minospeed007' className='btn' target='_blank'>Github</a>
    <a href='htpps://github.com/minospeed007'className='btn btn-primary'target='_blank'>Live Demo</a>
     </div>
    </article>
    <article className='portfolio__item'>
         <div className='portforlio__item-image'>
         <img src={portfolio} alt='portfolio-img'/>
         </div>
    <h3>This is the titleof my portfolio </h3>
    <div className='portfolio__item-cta'>
    <a href='htpps://github.com/minospeed007' className='btn' target='_blank'>Github</a>
    <a href='htpps://github.com/minospeed007'className='btn btn-primary'target='_blank'>Live Demo</a>
     </div>
    </article>
    <article className='portfolio__item'>
         <div className='portforlio__item-image'>
         <img src={portfolio} alt='portfolio-img'/>
         </div>
    <h3>This is the titleof my portfolio </h3>
    <div className='portfolio__item-cta'>
    <a href='htpps://github.com/minospeed007' className='btn' target='_blank'>Github</a>
    <a href='htpps://github.com/minospeed007'className='btn btn-primary'target='_blank'>Live Demo</a>
     </div>
    </article>
    <article className='portfolio__item'>
         <div className='portforlio__item-image'>
         <img src={portfolio} alt='portfolio-img'/>
         </div>
    <h3>This is the titleof my portfolio </h3>
    <div className='portfolio__item-cta'>
    <a href='htpps://github.com/minospeed007' className='btn' target='_blank'>Github</a>
    <a href='htpps://github.com/minospeed007'className='btn btn-primary'target='_blank'>Live Demo</a>
     </div>
    </article>
    <article className='portfolio__item'>
         <div className='portforlio__item-image'>
         <img src={portfolio} alt='portfolio-img'/>
         </div>
    <h3>This is the titleof my portfolio </h3>
    <div className='portfolio__item-cta'>
    <a href='htpps://github.com/minospeed007' className='btn' target='_blank'>Github</a>
    <a href='htpps://github.com/minospeed007'className='btn btn-primary'target='_blank'>Live Demo</a>
     </div>
    </article>
    <article className='portfolio__item'>
         <div className='portforlio__item-image'>
         <img src={portfolio} alt='portfolio-img'/>
         </div>
    <h3>This is the titleof my portfolio </h3>
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
