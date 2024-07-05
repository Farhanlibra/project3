import React from 'react';
import { Card, Col, Row } from 'antd';

import { CheckOutlined } from '@ant-design/icons';
const TryCard = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card style={{fontSize:'14px'}}  title="What is Instant?" bordered={false}>
      <CheckOutlined style={{marginRight:'10px',fontSize:'20px'}} />Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </Card>
    </Col>
    <Col span={12}>
      <Card style={{fontSize:'14px'}} title="How do I use the new features of Frame App?" bordered={false}>
      <CheckOutlined style={{marginRight:'10px', fontSize:'20px'}} />On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
      </Card>
    </Col>
    <Col span={12}>
      <Card style={{fontSize:'14px'}} title="Is this available to my country?" bordered={false}>
      <CheckOutlined style={{marginRight:'10px', fontSize:'20px'}} />The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
      </Card>
    </Col>
    <Col span={12}>
      <Card style={{fontSize:'14px'}} title="I have technical problem who do I email?" bordered={false}>
      <CheckOutlined style={{marginRight:'10px', fontSize:'20px'}}/>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
      </Card>
    </Col>
  </Row>
);
export default TryCard;