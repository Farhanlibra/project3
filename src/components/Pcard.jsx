import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const Pcard = ({d}) => (
  <Card
    hoverable
    style={{
      width: 350,
      
    }}
    
  >
    <h1 style={{textAlign:'center', fontSize:'60px', color:'blue'}}>{d.price}</h1>
    <p style={{textAlign:'center'}}>This is a monthly recurring payment.</p>
    <Meta style={{backgroundColor:'white', textAlign:'center'}} title={d.title}   description=<ul><li style={{textAlign:'left', fontSize:'20px'}}>{d.desc[0]}</li><li style={{textAlign:'left', fontSize:'20px'}}>{d.desc[1]}</li><li style={{textAlign:'left', fontSize:'20px'}}>{d.desc[2]}</li></ul>  
    />
<button style={{textAlign:'center', alignContent:'center', marginLeft:'100px', marginTop:'30px', marginBottom:'50px'}} className='btn btn-primary'> GET STARTED</button>
    
    
  </Card>
);
export default Pcard;