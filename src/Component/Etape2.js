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
  const choix = Viande.map((kebab) => {
    return (
      <ImageCard
        key={kebab.name}
        onClick={() => {
          const mykebab = [...location.state, { Viande: kebab }];
          history.push("/etape3", mykebab);
        }}
      >
        <img src={kebab.image.default} alt="pain" />
        <StyledSimpleText>{kebab.name}</StyledSimpleText>
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
