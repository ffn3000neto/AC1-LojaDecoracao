import React from 'react';
import img1 from '../assets/decor1.jpg'
import img2 from "../assets/decor2.jpg"
import img3 from "../assets/decor3.jpg"
import img4 from "../assets/decor4.jpg"

const dados = [
  {
    img:img1
  },
  {
    img:img2
  },
  {
    img:img3
  },
  // {
  //   img:img4
  // }
]
const cards = dados.map((item)=> (
        <div className="fakecarousel" key={item}>
          <img src={item.img} alt="Imagem 1" />
        </div>
  
))
const FakeCarouselCards = () => {
  return (
    <section className="fakecarousel-section">
      <div className="fakecarousel-container">
        {cards}
      </div>
    </section>
  );
};

export default FakeCarouselCards;
