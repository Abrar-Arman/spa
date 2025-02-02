import cake from '../../assets/img/cake.png';
import cabin from '../../assets/img/cabin.png';
import circus from '../../assets/img/circus.png';
import game from '../../assets/img/game.png';
import safe from '../../assets/img/safe.png';
import submarine from '../../assets/img/submarine.png';
import { useState } from 'react';
import PortfolioItem from './PortfolioItem';
const img=[cabin,cake,circus,game,safe,submarine ]
export default function Portfolio() {
    const [portfolioImg]=useState(img);
  return (
    <div className="container portfolio pt-5">
      <h2 className="text-center mb-0 text-uppercase">portfolio</h2>
      <div className=" divider d-flex justify-content-center align-items-center ">
                    <span className="line"></span>
                    <span className="star px-1">★</span>
                    <span className="line"></span>
              </div>
              <div className="row mt-2">
              {portfolioImg.map((img,ind)=><PortfolioItem img={img} key={ind} />)}
              </div>
             
    </div>
  )
}
