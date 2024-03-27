import zahn from '../../assests/zahn.jpg'
import chi from '../../assests/chinwendu.jpg'
import jesse from '../../assests/Jesse.jpg'
import esther from '../../assests/Esther.jpg'

import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css'

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
                <h4 className='client_name'>Chinwendu</h4>
            <small className='client__reviews'>
                <h4 className='client_name'>Chinwendu</h4>
                </small>
            <small className='client__reviews'>
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
                <h4 className='client_name'>Zahn</h4>
            <p className='client__reviews'>
            "Nonso Okeke stands out as an exceptional developer.
              Working alongside him was a constant source of inspiration. 
               He is someone you can work with".





            </p>
            </SwiperSlide>  
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
            <img src={jesse} className='client__img' alt='client_img'/>
           
                </div>
                <h4 className='client_name'>Jesse</h4>
            <p className='client__reviews'>
            "Initially, I was skeptical about entrusting Nonso with the development of my e-commerce website.
             However, I decided to give him a chance, and I was truly blown away by the exceptional quality of the job he delivered.
              The website's design and performance are top-notch.
            </p>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
            <img src={esther} className='client__img' alt='client_img'/>
           
                </div>
                <h4 className='client_name'>Esther</h4>
            <p className='client__reviews'>
                "I have worked with many developers, 
                but Nonso stood out as someone who pays attention to details and adheres to schedules.
                 His competence level is what every company, which values expertise, 
                 would be delighted to have on their team."
            </p>
            </SwiperSlide> 
        </Swiper>
    </section>
    </>)
}
export default Testimonial
