import Me from '../../assests/happyboy.jpg'
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
      <img src={Me} className='client__img' alt='client_img'/>
           
                </div>
                <h5 className='client_name'>Nicholas</h5>
            <small className='client__review'>
         Working with Nonso Okeke was very inspiring. He is a dedicated Developer....
            </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
            <img src={Me}  className='client__img' alt='client_img'/>
           
                </div>
                <h5 className='client_name'>Jordan</h5>
            <small className='client__review'>
         Working with Nonso Okeke was very inspiring. He is a dedicated Developer....
            </small>
            </SwiperSlide>  
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
            <img src={Me} className='client__img' alt='client_img'/>
           
                </div>
                <h5 className='client_name'>Isaac</h5>
            <small className='client__review'>
         Working with Nonso Okeke was very inspiring. He is a dedicated Developer....
            </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
            <img src={Me} className='client__img' alt='client_img'/>
           
                </div>
                <h5 className='client_name'>Celestina</h5>
            <small className='client__review'>
         Working with Nonso Okeke was very inspiring. He is a dedicated Developer....
            </small>
            </SwiperSlide> 
        </Swiper>
    </section>
    </>)
}
export default Testimonial
