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

function Etape4() {
  const location = useLocation();
  const history = useHistory();
  const [display, setDisplay] = useState(false);
  var [sou, setSou] = useState([]);
  const { Sauces } = fakedata;
  const choix = Sauces.map((kebab) => {
    return (
      <ImageCard
        key={kebab.name}
        onClick={() => {
          console.log(sou.length);
          if (sou.length < 2) {
            document.getElementById(kebab.name).style.display = "block";
            setSou([...sou, kebab]);
            setDisplay(true);
          }
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
        const mykebab = [...location.state, { Souces: sou }];
        console.log(mykebab);
        history.push("/recapitulatif", mykebab);
      }}
    >
      Continuer
    </ButtonST>
  );
  return (
    <div>
      <div>
        <StyledCounter>Quelques Sauces</StyledCounter>
        <ContinerStyle>{choix}</ContinerStyle>
        {display ? suivant : null}
      </div>
    </div>
  );
}

export default Etape4;
