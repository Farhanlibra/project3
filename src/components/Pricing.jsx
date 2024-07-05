import React from 'react'
import style from './Pricing.module.css'
import Pcard from './Pcard'

const Pricing = () => {
    const data=[{
        "title":"STARTER",
        "price":"22.99$",
        "desc":["Pointing has no control", "A small river named Duden", "flows Roasted parts of sentences", "fly into your mouth"]
    },
    {
        "title":"BUSINESS",
        "price":"69.99$",
        "desc":["Pointing has no control", "A small river named Duden", "flows Roasted parts of sentences", "fly into your mouth"]
    },
    {
        "title":"PREMIUM",
        "price":"224.99$",
        "desc":["Pointing has no control", "A small river named Duden", "flows Roasted parts of sentences", "fly into your mouth"]
    }]
  return (
    <>
    <div className={style.container}>
        <h1 style={{textAlign:'center', fontSize:'50px'}}>
        Choose the plan that’s right for<br></br> your business
        
        </h1>
        <hr style={{border:' solid, blue, 3px, ', width:'70px', textAlign:'center', marginLeft:'700px', marginTop:'40px'}} ></hr>
        <p style={{textAlign:'center', width:'700px', marginLeft:'400px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    </div>
    <div className='Pcardholder'>
        {data.map(d=> <Pcard d={d}/>)}
    </div>
    
    </>
  )
}

export default Pricing