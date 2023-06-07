import {AiOutlineHome} from  'react-icons/ai'
import {AiOutlineUser} from  'react-icons/ai'
import {BiBook} from  'react-icons/bi'
import {RiServiceLine} from  'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import './nav.css'
const Nav=()=>{
    const [activeNav, setActiveNav]=useState('#')
    
    return(<>
    <nav>
     <a href='#' className={activeNav ==='#' ? 'active': ''} onClick={()=>setActiveNav('#')}><AiOutlineHome/></a>
            
    <a href='#about' className={activeNav==='#about' ? 'active': ''}
     onClick={()=>setActiveNav('#about')} >
            <AiOutlineUser/></a>
<a href='#experience' onClick={()=>setActiveNav('#experience')} 
className={activeNav==='#experience' ? 'active': ''}>
            <BiBook/></a>
<a href='#services' onClick={()=>setActiveNav('#services')} 
className={activeNav ==='#services' ? 'active': ''}>
            <RiServiceLine/></a>
<a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}>
<BiMessageSquareDetail/></a>


    </nav>
    </>)
}
export default Nav
