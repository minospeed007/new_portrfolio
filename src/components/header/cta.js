import CV from '../../assests/CV.docx'

const CTA = ()=>{
    return(<>
    <div >
      <div div className='cta'>  
        <a href={CV} download className='btn btn-primary'>Download CV</a>
        <a href="#contact"  className='btn '>Let's talk!</a>
        </div>
    </div>
    </>)
}
export default CTA