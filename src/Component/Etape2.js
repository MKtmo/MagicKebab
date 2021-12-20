import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  StyledCounter,
  StyledSimpleText,
  ImageCard,
  ContinerStyle,
} from "./style";
import fakedata from "../data";

function Etape2() {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const { Viande } = fakedata;
  const choix = Viande.map((kabab) => {
    return (
      <ImageCard
        key={kabab.name}
        onClick={() => {
          const myKabab = [...location.state, { Viande: kabab }];
          history.push("/etape3", myKabab);
        }}
      >
        <img src={kabab.image.default} alt="pain" />
        <StyledSimpleText>{kabab.name}</StyledSimpleText>
      </ImageCard>
    );
  });
  return (
    <div>
      <StyledCounter>Plutot viande ou tofu?</StyledCounter>
      <ContinerStyle>{choix}</ContinerStyle>
    </div>
  );
}

export default Etape2;
