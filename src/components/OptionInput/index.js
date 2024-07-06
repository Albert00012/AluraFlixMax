import { useContext } from "react";
import styled, { css } from "styled-components";
import { GlobalContext } from "../../context/index";

const LabelStyles = styled.label`
  display: flex;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  flex-direction: column;
  color: var(--white);
  gap: 15px;

  @media (min-width: 1024px) {
    width: ${(props) => (props.$from === "modal" ? "100%" : "47%")};
  }
`;

const InputStyles = styled.select`
  height: 62px;
  padding: 16px 4px;
  font-size: 2rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  background-color: var(--black);
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

const Error = styled.span`
  font-size: 1.5rem;
  text-align: center;
`;

const OptionInput = ({
  children,
  from = "",
  placeholder,
  inputValue = "",
  name,
}) => {
  const { categories, handleInputChange, errorMessages, verifyField } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
    verifyField(e.target);
  };

  return (
    <LabelStyles $from={from}>
      {children}
      <InputStyles
        $error={errorMessages[name]}
        $from={from}
        value={inputValue}
        name={name}
        onChange={handleChange}
        required
      >
        <option value="" disabled defaultValue="" hidden>
          {placeholder}
        </option>
        {categories.map((category) => (
          <option value={category.nombre} key={category.id}>
            {category.nombre}
          </option>
        ))}
      </InputStyles>
      {errorMessages[name] && <Error>{errorMessages[name]}</Error>}
    </LabelStyles>
  );
};

export default OptionInput;