import styled from "styled-components";

const ButtonStyles = styled.button`
  display: flex;
  height: 28px;
  align-items: center;
  gap: 20px;
  background: none;
  border: none;
  cursor: pointer;
  
`;

const TextoStyles = styled.span`
  color: var(--white);
  font-weight: bold;
  font-size: 1.6rem;
  text-transform: uppercase;
  
`;

const EditButton = ({ img, children, action, video }) => {
  return (
    <ButtonStyles
      onClick={() => (children === "Borrar" ? action(video.id) : action(video))}
    >
      <img src={img} alt={`icono de ${children}`} />
      <TextoStyles>{children}</TextoStyles>
    </ButtonStyles>
  );
};

export default EditButton;