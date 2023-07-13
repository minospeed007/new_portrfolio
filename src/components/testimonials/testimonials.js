import zahn from '../../assests/zahn.jpg'
import chi from '../../assests/chinwendu.jpg'
import jesse from '../../assests/Jesse.jpg'
import esther from '../../assests/Esther.jpg'

import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonial.css'

const Testimonial=()=>{
    return(<>
    <section id="testimonial" >
        <h5>Reviews From Clients</h5>
        <h2>Testimonials</h2>
        <Swiper className='container testimonial_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
        <SwiperSlide className='testimonial'>
            <div className='client_avatar'>
      <img src={chi} className='client__img' alt='client_img'/>
           
                </div>
                <h5 className='client_name'>Chinwendu</h5>
            <small className='client__review'>
               " Working with Nonso Okeke was truly inspiring.
                 As a dedicated developer, his passion and attention to detail motivated our team.
                  His expertise and unwavering work ethic are commendable.
                 I recommend him for any development project".
            </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
            <img src={zahn}  className='client__img' alt='client_img'/>
           
                </div>
                <h5 className='client_name'>Zahn</h5>
            <small className='client__review'>
            "Nonso Okeke stands out as an exceptional developer.
             His unwavering dedication and remarkable expertise were truly impressive.
              Working alongside him was a constant source of inspiration. 
              Not only did he deliver a high-quality job, but he also consistently met all deadlines.
               He is someone you can work with".





            </small>
            </SwiperSlide>  
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
            <img src={jesse} className='client__img' alt='client_img'/>
           
                </div>
                <h5 className='client_name'>Jesse</h5>
            <small className='client__review'>
            "Initially, I was skeptical about entrusting Nonso with the development of my e-commerce website.
             However, I decided to give him a chance, and I was truly blown away by the exceptional quality of the job he delivered.
              The website's design and performance are top-notch.
             I wholeheartedly recommend Nonso for web project work".
            </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
            <img src={esther} className='client__img' alt='client_img'/>
           
                </div>
                <h5 className='client_name'>Esther</h5>
            <small className='client__review'>
                "I have worked with many developers, 
                but Nonso stood out as someone who pays attention to details and adheres to schedules.
                 His competence level is what every company, which values expertise, 
                 would be delighted to have on their team. 
                He is simply an amazing talent."
            </small>
            </SwiperSlide> 
        </Swiper>
    </section>
    </>)
}
export default Testimonial
