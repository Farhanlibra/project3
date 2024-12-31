import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { MobileOutlined, BulbOutlined } from '@ant-design/icons'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Rcard from '../components/Rcard'
import Reviews from '../components/Reviews'
import Try from '../components/Try'
import Join from '../components/Join'
import Contact from '../components/Contact'
import Aldhahery from './Aldhahery'



const Home = () => {
 
   const data=[{
    "icon":  <MobileOutlined style={{ fontSize: '40px', color: '#08c', textAlign:"center" }}  />,
    "title":
    "Mobile Optimize",
    "desc":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    "icon":  <MobileOutlined style={{ fontSize: '40px', color: '#08c', textAlign:"center" }}  />,
    "title":
    "Increase Revenue",
    "desc":"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    "icon":  <BulbOutlined style={{ fontSize: '40px', color: '#08c', textAlign:"center", background:'none' }} />,
    "title":
    "Smart Idea",
    "desc":"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  }]
  return (
    <div>
       
       <Aldhahery/>
        <div className='cardholder'>
          {data.map(d=> <Card d={d}/>)}
        </div>
        <div style={{backgroundColor:'cyan'}}><Features/></div>
        
        <div style={{backgroundColor:'white'}}><Pricing/></div>
        <div ><Reviews/></div>
        <div><Try/></div>
        <div><Join/></div>
        <Contact/>
        
        
        
        
       
    </div>
  )
}

export default Home