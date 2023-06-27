import React from 'react'
import drjart from "../assets/prism.jpg";
import "./productcards.css"
import card1 from "../assets/video1.mp4";
import card2 from "../assets/video2.mp4";
import card3 from "../assets/video3.mp4";
import card4 from "../assets/video4.mp4";
import card5 from "../assets/video5.mp4";




const ProductCards = () => {

const cardvideos = [card1,card2,card3,card4,card5];
const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});


  return (
   
<main>
    
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

  <div className = "pcard">
      <video className='video' loop muted autoPlay  src={card1} />
    <div className="card-content">
      <h2>
        Card Heading
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <a href="#" className="button">
        Find out more 
        <span className="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a>
    </div>
  </div>
</main>
    
  )
}

export default ProductCards