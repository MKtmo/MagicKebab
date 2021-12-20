import { React } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  StyledCounter,
  StyledSimpleText,
  ImageCard,
  ContinerStyle,
  ButtonST,
} from "./style";

function Recapitulatif() {
  const location = useLocation();
  const history = useHistory();
  const data = location.state;
  console.log(data);
  const pain = (
    <ImageCard key={data[0].Pain.name}>
      <img src={data[0].Pain.image.default} alt="pain" />
      <StyledSimpleText>{data[0].Pain.name}</StyledSimpleText>
    </ImageCard>
  );
  const viande = (
    <ImageCard key={data[1].Viande.name}>
      <img src={data[1].Viande.image.default} alt="pain" />
      <StyledSimpleText>{data[1].Viande.name}</StyledSimpleText>
    </ImageCard>
  );
  const choix = data[2].Salades.map((kabab) => {
    console.log(kabab.name);
    return (
      <ImageCard key={kabab.name}>
        <img src={kabab.image.default} alt="pain" />
        <StyledSimpleText>{kabab.name}</StyledSimpleText>
      </ImageCard>
    );
  });
  const choix2 = data[3].Souces.map((kabab) => {
    console.log(kabab.name);
    return (
      <ImageCard key={kabab.name}>
        <img src={kabab.image.default} alt="pain" />
        <StyledSimpleText>{kabab.name}</StyledSimpleText>
      </ImageCard>
    );
  });
  const suivant = (
    <ButtonST
      onClick={() => {
        const myKabab = [...location.state];
        const listOfKababs = JSON.parse(localStorage.getItem("listeKabab"))
        if(listOfKababs){
            localStorage.setItem(
                "listeKabab",
                JSON.stringify([...listOfKababs,myKabab])
              );}else {localStorage.setItem(
                "listeKabab",
                JSON.stringify([myKabab])
              );}
              history.push("/", myKabab);
        

        
      }}
    >
      Commander
    </ButtonST>
  );
  return (
    <div>
      <div>
        <StyledCounter>On Recapitule</StyledCounter>
        <ContinerStyle>
          {pain}+{viande}+{choix}+{choix2}
        </ContinerStyle>
        {suivant}
      </div>
    </div>
  );
}

export default Recapitulatif;
