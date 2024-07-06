import homeActivo from "./home-activo.png";
import homeinactivo from "./home-inactivo.png";
import addActivo from "./añadir-activo.png";
import addinactivo from "./añadir-inactivo.png";
import Button from "../Button";
import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100px;
  min-height: 100px;
  bottom: 0;
  background-color: var(--black);
  align-items: center;
  justify-content: center;
  

  @media (width > 1024px) {
    position: relative;
    padding: 0 20px;
    height: 125px;
    min-height: 125px;
    justify-content: space-between;
  }
`;

const ShadowStyles = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  top: 0;
  left: 0;
  background-color: var(--red);

  @media (width > 1024px) {
    bottom: 0;
    top: auto;
  }
`;

export const LogoStyles = styled.img`
  display: none;
  

  @media (width > 1024px) {
    display: block;
    height: 60px;
    width: auto;
    
    
  }
`;

const ButtonContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (width > 1024px) {
    width: auto;
    gap: 25px;
    
  }
`;

const Header = ({ logo }) => {
  return (
    <HeaderStyles>
      <ShadowStyles />
      <LogoStyles src={logo} alt="Logo de aluraFlix" />
      <ButtonContainer>
        <Button path="/" iconActive={homeActivo} iconInactive={homeinactivo}>
          Home
        </Button>
        <Button path="/add" iconActive={addActivo} iconInactive={addinactivo}>
          Nuevo video
        </Button>
      </ButtonContainer>
    </HeaderStyles>
  );
};

export default Header;