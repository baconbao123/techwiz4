import React from "react"
import { Card } from "react-bootstrap";
import butterfly1 from '../../../../../assets/image/floweringshrubs/1.Butterfly_Bush.png';
import butterfly2 from '../../../../../assets/image/floweringshrubs/2.Butterfly_Bush.png';
import './style.scss'

const handleDragStart = (e) => e.preventDefault();


export const SlideCardImg = [
    <Card className="img-card">
      <Card.Img variant="top" src={butterfly1} onDragStart={handleDragStart} className="img-current" />
    </Card>,
    <Card className="img-card">
      <Card.Img variant="top" src={butterfly2} onDragStart={handleDragStart} className="img-1" />
    </Card>,
    <Card className="img-card">
      <Card.Img variant="top" src={butterfly1} onDragStart={handleDragStart} className="img-2" />
    </Card>,
];
