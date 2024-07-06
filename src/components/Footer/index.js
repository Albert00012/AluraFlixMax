import styled from "styled-components";
import { LogoStyles } from "../Header";

const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  height: 125px;
  min-height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);

  h3{
    color: #ffffff;
  }

  @media (width > 1024px) {
    display: flex;

    h3{
    color: #ffffff;
    position: absolute;
    top:90px;

  }
  }
`;



const ShadowStyles = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  background-color: var(--red);
`;



const Footer = ({ logo }) => {
  return (
    <FooterStyles>
      <ShadowStyles />
      <LogoStyles src={logo} alt="Logo aluraFlix" />
      <h3>JOSE ALBERTO CONTRERAS BARAJAS</h3>
    </FooterStyles>
  );
};

export default Footer;