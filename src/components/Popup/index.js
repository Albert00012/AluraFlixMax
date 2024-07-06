import styled from "styled-components";
import error from "../Modal/cerrar.png";
import ciruclo from "./check-circle.svg";

const PopupStyles = styled.div`
  display: flex;
  position: fixed;
  width: 80%;
  justify-content: center;
  padding: 40px 20px;
  top: 50%;
  align-self: center;
  transform: translateY(-50%);
  background-color: var(--black);
  color: var(--white);
  font-size: 3rem;
  border: 6px solid var(--red);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  z-index: 10;

	@media (width > 1024px) {
		width: 700px;
	}
`;

const Popup = ({ message, type }) => {
  const icon = type === "error" ? error : ciruclo;
  return (
    <PopupStyles>
      <img src={icon} alt={`icono de ${type}`} style={{ color: "inherit" }} />
      <p style={{ textAlign: "center" }}>{message}</p>
    </PopupStyles>
  );
};

export default Popup;