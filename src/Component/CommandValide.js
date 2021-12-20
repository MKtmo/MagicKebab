import React from 'react'
import {
    StyledCounter,
    FinalPage,
    ImgStyle,
  } from "./style";
  import animation from '../asset/animation.png'

function CommandValide(){
   
    return (
        <div>
             <StyledCounter>C'est parti !</StyledCounter>
             <FinalPage>Notre maitre kébabier prépare votre commande.</FinalPage>
             <FinalPage>Patience...</FinalPage>
             <ImgStyle src={animation} alt="Logo"></ImgStyle>

        </div>
    )
}

export default CommandValide
