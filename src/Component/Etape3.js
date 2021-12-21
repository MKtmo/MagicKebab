import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useHistory } from "react-router-dom";
import {
  StyledCounter,
  StyledSimpleText,
  ImageCard,
  ContinerStyle,
  IconeEWithSelect,
  ButtonST,
} from "./style";
import fakedata from "../data";

function Etape3() {
  const location = useLocation();
  const history = useHistory();
  const [display, setDisplay] = useState(false);
  const [mySalad, setMySalad] = useState([]);
  console.log(location.state);
  const { Salade } = fakedata;
  const choix = Salade.map((kebab) => {
    return (
      <ImageCard
        key={kebab.name}
        onClick={() => {
          document.getElementById(kebab.name).style.display = "block";
          setMySalad([...mySalad, kebab]);
          setDisplay(true);
        }}
      >
        <IconeEWithSelect id={kebab.name}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </IconeEWithSelect>
        <img src={kebab.image.default} alt="pain" />
        <StyledSimpleText>{kebab.name}</StyledSimpleText>
      </ImageCard>
    );
  });
  const suivant = (
    <ButtonST
      onClick={() => {
        const mykebab = [...location.state, { Salades: mySalad }];
        console.log(mykebab);
        history.push("/etape4", mykebab);
      }}
    >
      Continuer
    </ButtonST>
  );
  return (
    <div>
      <StyledCounter>Salade,Tomate,Oignons ?</StyledCounter>
      <ContinerStyle>{choix}</ContinerStyle>
      {display ? suivant : null}
    </div>
  );
}

export default Etape3;
