import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'
const Experience=()=>{
    return(<>
    <section  id='experience'>
        <h5>My Skills</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
            <div className=" experience__backend ">
        <h3>Frontend Development</h3>
        <div className="backend__div">
            <div className="experience__content">
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>HTML</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>CSS</h4>
                    <p className='text-light'>Proficient</p>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>ReactJs</h4>
                    <small className='text-light'>Proficient</small>
                    </div>
                </article><article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>Javascript</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>Tailwind</h4>
                    <p className='text-light'>Proficient</p>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>Material-ui</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                </div>
            </div>
            
            </div> 
             
        <div className=" experience__backend ">
        <h3>Backend Development</h3>
        <div className="backend__div">
            <div className="experience__content">
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>NodeJs</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>MYSQL</h4>
                    <p className='text-light'>Proficient</p>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>ExpressJs</h4>
                    <small className='text-light'>Proficient</small>
                    </div>
                </article><article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>API</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>Git/Github</h4>
                    <small className='text-light'>Proficient</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                    <h4 className='text-header'>MongoDB</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                </div>
            </div>
            
            </div> 
             
        </div>
    </section>
    </>)
}
export default Experience
