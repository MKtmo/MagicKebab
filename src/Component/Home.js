import { React, useState } from "react";
import fakedata from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import {
  StyledCounter,
  StyledSimpleText,
  ImageCard,
  ContinerStyle,
  CommandeDivPanier,
  BtnPanier,
  CommendDetaills,
  Commande,
  TotalCommend,
} from "./style";

function Home(params) {
  const history = useHistory();
  const { Pain } = fakedata;
  const val = localStorage.getItem("listeKabab");
  const [pan, setPan] = useState(JSON.parse(val));
  var prix = 0;

  const choix = Pain.map((kabab) => {
    return (
      <ImageCard
        key={kabab.name}
        onClick={() => {
          const myKabab = [{ Pain: kabab }];
          history.push("/etape2", myKabab);
        }}
      >
        <img src={kabab.image.default} alt="pain" />
        <StyledSimpleText>{kabab.name}</StyledSimpleText>
      </ImageCard>
    );
  });
  if (pan) {
    var panier = pan.map((element,k) => {
      prix = prix + 11;
      const pain = element[0].Pain.name;
      const viande = element[1].Viande.name;
      const salad = element[2].Salades.map((kabab) => kabab.name + ",");
      const sauce = element[3].Souces.map((kabab) => kabab.name + " ");
      return (
        <CommendDetaills key = {element[0].Pain.prix}>
          {pain},{viande},{salad},{sauce}
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              const listeKabab = pan.filter((elem) => {
                return elem[0] !== element[0];
              });
              setPan(listeKabab);
              console.log(listeKabab);
              localStorage.removeItem("listeKabab");
              localStorage.setItem("listeKabab", JSON.stringify(listeKabab));
            }}
          />
        </CommendDetaills>
      );
    });
  }
  return (
    <div>
      <StyledCounter>Pain au galette?</StyledCounter>
      <ContinerStyle>{choix}</ContinerStyle>
      {JSON.parse(val) ? (
        <CommandeDivPanier>
          <TotalCommend>Total: {prix}€</TotalCommend>
          {pan.length > 0 ? (
            <BtnPanier
              onClick={() => {
                history.push("/CommandeValide");
              }}
            >
              Passer la commande
            </BtnPanier>
          ) : null}
          <Commande>Votre commande</Commande>
          {panier}
        </CommandeDivPanier>
      ) : null}
    </div>
  );
}

export default Home;
