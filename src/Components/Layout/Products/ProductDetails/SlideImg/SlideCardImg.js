  import React from "react";
  import AliceCarousel from "react-alice-carousel";
  import { Card } from "react-bootstrap";
  import butterfly1 from '../../../../../assets/image/floweringshrubs/1.Butterfly_Bush.png';
  import butterfly2 from '../../../../../assets/image/floweringshrubs/2.Butterfly_Bush.png';
  import './style.scss'


  const handleDragStart = (e) => e.preventDefault();

  const SlideCardImg = ({ productList }) => {
    const items = productList.map(item => (
      <Card className="img-card" key={item.id}>
        <Card.Img src={item.img[0].img1} onDragStart={handleDragStart} className="img-current" />
      </Card>
    ));
  
    return <AliceCarousel items={items} />;
  };
  
  export default SlideCardImg;