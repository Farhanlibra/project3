import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='containerForm'>
            <ContactForm/>

        </div>
        <div className='containerc'>
            <h3>EMAIL</h3>
            
<p style={{backgroundColor:'cyan'}}>probootstrap@gmail.com</p>
<h3 style={{backgroundColor:'cyan'}}>PHONE<br></br></h3>
<p style={{backgroundColor:'cyan'}}>+30 976 1382 9921</p>
<h3>FAX</h3>
<span  >+30 976 1382 9922<br></br><br></br></span>
<h3>ADDRESS</h3>
<span >San Francisco, CA<br></br>
4th Floor8 Lower<br></br>
San Francisco street, M1 50F</span>
        </div>
    </div>
  )
}

export default Contact