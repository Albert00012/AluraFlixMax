import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/index";

const ButtonStyles = styled.button`
  width: 180px;
  height: 54px;
  font-weight: bold;
  font-size: 2rem;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;

  background-color: ${(props) =>
    props.$main ? "var(--black)" : "transparent"};
  border: ${(props) =>
    props.$main
      ? "2px solid var(--red)"
      : "2px solid var(--white)"};
  color: ${(props) =>
    props.$main ? "var(--red)" : "var(--white)"};
  box-shadow: ${(props) =>
    props.$main ? "inset 0px 0px 12px 2px rgb(255, 0, 0)" : ""};

  &:disabled {
    border: 2px solid var(--gray);
    box-shadow: inset 0px 0px 12px 2px var(--gray);
    color: var(--white);
    cursor: not-allowed;
  }
`;

const ActionBtn = ({ children, main,action, type  }) => {
  const { isFormValid } = useContext(GlobalContext);

  return (
    <>
      {action ? (
        <ButtonStyles onClick={() => action()} type={type} $main={main}>
          {children}
        </ButtonStyles>
      ) : (
        <ButtonStyles disabled={!isFormValid} type={type} $main={main}>
          {children}
        </ButtonStyles>
      )}
    </>
  );
};

export default ActionBtn;