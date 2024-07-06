import { useContext } from "react";
import styled, { css } from "styled-components";
import { GlobalContext } from "../../context/index";

const LabelStyles = styled.label`
  display: flex;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: var(--white);
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1024px) {
    width: ${(props) => (props.$from === "modal" ? "100%" : "47%")};
  }
`;

const InputStyles = styled.input`
  height: 62px;
  background: none;
  padding: 16px 4px;
  font-size: 2rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  color: var(--white);
  
  border: ${(props) =>
    props.$from === "modal"
      ? "3px solid var(--red)"
      : "3px solid var(--gray)"};

  ${(props) => {
    if (props.$error) {
      return css`
        &:invalid {
          border: 3px solid var(--error);
        }
      `;
    }
  }}
`;

const TextareaStyles = styled.textarea` 
  height: 155px;
  padding: 16px 4px;
  background: none;
  font-size: 2rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  color: var(--white);
  border: ${(props) =>
    props.$from === "modal"
      ? "3px solid var(--red)"
      : "3px solid var(--gray)"};
  resize: none;
  scrollbar-width: thin;
  scrollbar-color: var(--red) var(--scrollbar-color);

  ${(props) => {
    if (props.$error) {
      return css`
        &:invalid {
          border: 3px solid var(--error);
        }
      `;
    }
  }}
`;

const Error = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: var(--error);
`;

const FormInput = ({
  children,
  type = "text",
  from = "",
  placeholder,
  inputValue = "",
  big,
  name,
  pattern,
  minlength,
  maxlength,
  title,
}) => {
  const { handleInputChange, errorMessages, verifyField } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
    verifyField(e.target);
  };

  const inputProps = {
    $error: errorMessages[name],
    $from: from,
    type: type,
    value: inputValue,
    placeholder: placeholder,
    onChange: handleChange,
    name: name,
    required: true,
    pattern: pattern,
    minLength: minlength,
    maxLength: maxlength,
    title: title,
  };

  return (
    <LabelStyles $from={from}>
      {children}
      {big ? (
        <TextareaStyles {...inputProps} />
      ) : (
        <InputStyles {...inputProps} />
      )}
      {errorMessages[name] && <Error>{errorMessages[name]}</Error>}
    </LabelStyles>
  );
};

export default FormInput;