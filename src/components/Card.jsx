import React from 'react'

const Card = ({d}) => {
  return (
    <div className='containercard'>
        <div className="card" style={{width: "18rem", border:'none'}}>
  <div style={{backgroundColor:"white", marginTop:"40px", background:'none'}}>{d.icon}</div>
  <div style={{backgroundColor:"white"}} className="card-body">
    <h5  style={{backgroundColor:"white", color:'blue'}}className="card-title">{d.title}</h5>
    <p style={{backgroundColor:"white"}} className="card-text">{d.desc}</p>
    <a style={{alignContent:'center'}}href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default Card