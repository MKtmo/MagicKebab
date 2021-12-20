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
  console.log(location.state)
  const { Salade } = fakedata;
  const choix = Salade.map((kabab) => {
    return (
      <ImageCard
        key={kabab.name}
        onClick={() => {
          document.getElementById(kabab.name).style.display = "block";
             setMySalad ([...mySalad, kabab]);
          setDisplay(true);
        }}
      >
        <IconeEWithSelect id={kabab.name}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </IconeEWithSelect>
        <img src={kabab.image.default} alt="pain" />
        <StyledSimpleText>{kabab.name}</StyledSimpleText>
      </ImageCard>
    );
  });
  const suivant = (
    <ButtonST
      onClick={() => {
        const myKabab = [...location.state, {Salades:mySalad}];
        console.log(myKabab)
        history.push("/etape4", myKabab);
      }}
    >
      Continuer
    </ButtonST>
  );
  return (
    <div>
      <StyledCounter>Salade,Tomate,Oignons ?</StyledCounter>
      <ContinerStyle>{choix}</ContinerStyle>
      {display? suivant:null}
    </div>
  );
}

export default Etape3;
