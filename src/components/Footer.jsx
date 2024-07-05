import { FacebookFilled, YoutubeFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='social'><TwitterOutlined style={{marginRight:'15px', fontSize:'40px'}} /><FacebookFilled style={{marginRight:'15px', fontSize:'40px'}} /><YoutubeFilled style={{marginRight:'15px', fontSize:'40px'}} /><LinkedinFilled style={{marginRight:'15px', fontSize:'40px'}} /><br></br>
    
    </div>
    <p className='copyri' style={{textAlign:'center', width:'400px', marginTop:'5px', fontSize:'20px', color:'white'}}>  

© 2019 Frame. All Rights Reserved.
Designed & Bootstrap templates by uiCookies
Demo Images by Unsplash</p>
    </div>
  )
}

export default Footer