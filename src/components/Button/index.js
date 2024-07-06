import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const LinkStyles = styled(Link)`
  display: flex;
  height: 54px;
  font-size: 2rem;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  border: ${(props) =>
    props.$active ? "3px solid var(--red)" : "none"};
  color: ${(props) =>
    props.$active ? "var(--red)" : "var(--white)"};
  background: ${(props) =>
    props.$active ? "var(--black)" : "none"};

  p {
    display: ${(props) => (props.$active ? "block" : "none")};
  }

  @media (width > 1024px) {
    min-width: 180px;
    justify-content: center;
    border-radius: 10px;
    background: none;

    border: ${(props) =>
    props.$active
      ? "3px solid var(--red)"
      : "3px solid var(--white)"};
    
    box-shadow: ${(props) =>
    props.$active ? "inset 0px 0px 12px 2px rgb(255, 0, 0)" : ""};

    p {
      display: block;
    }
  }
`;

const ImagenStyles = styled.img`
  height: ${(props) => (props.$active ? "25px" : "100%")};

  @media (width > 1024px) {
    display: none;
  }
`;

const Button = ({ iconActive, iconInactive, path, children }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <LinkStyles to={path} $active={isActive}>
      <ImagenStyles
        $active={isActive}
        src={isActive ? iconActive : iconInactive}
        alt={`icono de ${children}`}
      />
      <p>{children}</p>
    </LinkStyles>
  );
};

export default Button;