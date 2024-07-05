import React from 'react'

const ContactForm = () => {
  return (
    <div className='formcont'>
        <form>
  <div style={{width:'500px'}} className="mb-3">
    <h1>Get In Touch</h1>
    <input style={{width:'500px'}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=> e.target.value}/>
   
  </div>
  <div style={{width:'500px'}} className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1"  onChange={(e)=> e.target.value}/>
  </div>
  <div style={{width:'500px'}} className="mb-3">
    
    <input style={{width:'500px'}} type="text" className="form-control" id="exampleInputPassword1"  onChange={(e)=> e.target.value}/>
  </div>
  <div className="mb-3">
    
    <input style={{height:'260px', width:'500px', textAlign: 'left'}} type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=> e.target.value}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={()=>alert("Thanks for contacting us")}>Send Message</button>
</form>
    </div>
  )
}

export default ContactForm