import React from 'react'
import TryCard from './TryCard'

const Try = () => {
  return (
    <div>
        <h1 style={{textAlign:'center', fontSize:'50px', marginTop: '30px', marginLeft:'0px'}}>Try It Today</h1>
        <br></br>
        <p style={{textAlign:'center', width:'600px', marginLeft:'400px', marginBottom:'30px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <button style={{margin:'30px', marginLeft:'600px', height:'50px', width:'180px'}} className='btn btn-primary'>Get it Now</button>
        <div><img  style= {{ marginLeft:'150px' }} src='./try1.jpg' /></div>
        <div style={{margin:'50px'}}>
            <TryCard/>
        </div>
        
    </div>
  )
}

export default Try