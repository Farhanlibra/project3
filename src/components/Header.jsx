import React from 'react'
import style from '../components/Header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className={style.wrapper}>
    <div  className={style.imageholder} >
      
      
        <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid" style={{height:"60px"}}>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  style={{ fontSize:'25px', color:'white'}} className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{ fontSize:'25px', color:'white'}} className="nav-link active" aria-current="page" to="/features" >Feature</Link>
        </li>
       
        <li className="nav-item">
          <Link style={{ fontSize:'25px', color:'white'}} className="nav-link active" aria-current="page" to="/price" >Price</Link>
        </li>
        <li className="nav-item">
          <Link style={{ fontSize:'25px', color:'white'}} className="nav-link active" aria-current="page" to="/contact" >Contact</Link>
        </li>
      </ul>
      
    </div>
    
  </div>
  

</nav>
<div className={style.contimage}>
<p>uicookies.com Creates High Quality Bootstrap Template For Free</p>
   <button   className='btn btn-primary , '>Get Them Now</button>
<button  className='btn btn-primary ' >See Feature</button></div>

</div>
 

  

    </div>
  )
}

export default Header