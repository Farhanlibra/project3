import React from 'react';
import { Card } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const gridStyle = {
  width: '25%',
  

  textAlign: 'center',
};
const Rcard = () => (
  <Card style={{margin:'20px'}} >
    <Card.Grid style={gridStyle}><div>
        <img className='rimage' src='r1.jpg'/>
        <div><StarOutlined /><StarOutlined /><StarOutlined /></div>
        
        <p style={{textAlign:'left', width:'250px', fontSize:'18px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p>— Garry Alexander</p>
        </div></Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
    <div>
        <img className='rimage' src='r1.jpg'/>
        <div><StarOutlined /><StarOutlined /><StarOutlined /></div>
        <p style={{textAlign:'left', width:'250px', fontSize:'18px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p>— Garry Alexander</p>
        </div>
    </Card.Grid>
    <Card.Grid style={gridStyle}><div>
        <img className='rimage' src='r1.jpg'/>
        <div><StarOutlined /><StarOutlined /><StarOutlined /></div>
        <p style={{textAlign:'left', width:'250px', fontSize:'18px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p>— Garry Alexander</p>
        </div></Card.Grid>
    <Card.Grid style={gridStyle}><div>
        <img className='rimage' src='r2.jpg'/>
        <div><StarOutlined /><StarOutlined /><StarOutlined /></div>
        <p style={{textAlign:'left', width:'250px', fontSize:'18px'}}> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p>— Garry Alexander</p>
        </div></Card.Grid>
    <Card.Grid style={gridStyle}><div>
        <img className='rimage' src='r3.jpg'/>
        <div><StarOutlined /><StarOutlined /><StarOutlined /></div>
        <p style={{textAlign:'left', width:'250px', fontSize:'18px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p>— Garry Alexander</p>
        </div></Card.Grid>
    <Card.Grid style={gridStyle}><div>
        <img className='rimage' src='r4.jpg'/>
        <div><StarOutlined /><StarOutlined /><StarOutlined /></div>
        <p style={{textAlign:'left', width:'250px', fontSize:'18px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p>— Garry Alexander</p>
        </div></Card.Grid>
    <Card.Grid style={gridStyle}><div>
        <img className='rimage' src='r5.jpg'/>
        <div><StarOutlined /><StarOutlined /><StarOutlined /></div>
        <p style={{textAlign:'left', width:'250px', fontSize:'18px'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p>— Garry Alexander</p>
        </div></Card.Grid>
  </Card>
);
export default Rcard;