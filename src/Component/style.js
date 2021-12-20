import styled from "styled-components";

const StyledCounter = styled.div`
  font-family: "Fredoka One";
  font-size: 36px;
  color: #4d0302;
  text-align: center;
`;
const StyledSimpleText = styled.div`
  font-family: "Inconsolata";
  font-size: 22px;
  color: #4d0302;
  text-align: center;
`;
const ImageCard = styled.div`
  display: inline-block;
  border: 0.5px solid black;
  padding: 20px 0 20px 0;
  border-radius: 8px;
  margin: 8px;
  overflow: hidden;
  width: 218px;
  text-align: center;
  &:hover {
    border: 2.5px solid black;
  }
`;
const IconeEWithSelect = styled.div`
  padding: 10px 0 20px 0;
  margin: 8px;
  position: absolute;

  display: none;
`;
const ContinerStyle = styled.div`
  text-align: center;
  padding: 30px;s
`;
const ImgStyle = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
`;
const ButtonST = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: green;
  border: 2px solid green;
`;
const CommandeDivPanier = styled.div`
  position: absolute;
  width: 358px;
  height: 1024px;
  left: 1160px;
  top: 0px;
  background: #fffcf0;
  border-radius: 16px 0px 0px 16px;
`;
const BtnPanier = styled.button`
  position: absolute;
  width: 294px;
  height: 68px;
  left: 33px;
  top: 88px;
  margin-top: 40px;
  background: #4d0302;
  border: 1px solid #4d0302;
  box-sizing: border-box;
  border-radius: 16px;
  font-family: Inconsolata;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  text-align: center;

  color: #fff6d6;
`;

const CommendDetaills = styled.p`
  position: relative;
  margin: 11px;
  height: 73px;
  top: 290px;
  border: 1px solid rgba(77, 3, 2, 0.16);
  box-sizing: border-box;
  border-radius: 16px;
  font-family: Inconsolata;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  padding: 10px;
  color: #4d0302;
`;

const Commande = styled.p`
  position: absolute;
  width: 252px;
  height: 38px;
  left: 54px;
  top: 196px;

  font-family: Inconsolata;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 38px;

  color: #4d0302;
`;

const TotalCommend = styled.p`
  position: absolute;
  width: 216px;
  height: 38px;
  left: 71px;
  top: 30px;

  font-family: Inconsolata;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 38px;

  color: #4d0302;
`;
const FinalPage = styled.p`
  font-family: "Inconsolata";
  font-size: 30px;
  text-align: center;
`;
const ImageFooter = styled.img`
  display: flex;
  justify-content: center;
  padding: 1px;
  color: #4d0302;
`;

export {
  StyledCounter,
  StyledSimpleText,
  ImageCard,
  ContinerStyle,
  ImgStyle,
  IconeEWithSelect,
  ButtonST,
  CommandeDivPanier,
  BtnPanier,
  CommendDetaills,
  Commande,
  TotalCommend,
  FinalPage,
  ImageFooter,
};
