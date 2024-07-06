import styled from "styled-components";
import ActionBtn from "../../components/ActionBtn";
import FormInput from "../../components/FormInput";
import { ButtonContainer } from "../../components/Modal";
import OptionInput from "../../components/OptionInput";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/index";
import Popup from "../../components/Popup";

const AgregarContainer = styled.section`
  display: flex;
  width: 100%;
  padding: 100px 50px 150px;
  background-color: var(--black);
  flex-direction: column;
  flex: 1;
  gap: 60px;

  @media (width > 1024px) {
    justify-content: center;
  }
`;

const MainTitleContainer = styled.div`
  display: flex;
  text-align: center;
  color: var(--white);
  flex-direction: column;
  text-transform: uppercase;
  gap: 10px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const FormStyles = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 60px;

  @media (width > 1024px) {
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

const TitleStyles = styled.legend`
  width: 100%;
  padding: 12px 0;
  font-size: 3.6rem;
  font-weight: 600;
  text-align:center;
  border-top: 3px solid var(--gray);
  border-bottom: 3px solid var(--gray);
  color: var(--white);
  text-transform: capitalize;
  
`;

const Agregar = () => {
  const {
    title,
    image,
    category,
    videoLink,
    description,
    handleInputChange,
    createNewVideo,
    clearInputs,
    popup,
		setErrorMessages,
  } = useContext(GlobalContext);

  useEffect(() => {
    handleInputChange("titulo", "");
    handleInputChange("categoria", "");
    handleInputChange("imagen", "");
    handleInputChange("video", "");
    handleInputChange("descripcion", "");
		setErrorMessages({})
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewVideo({ title, image, category, videoLink, description });
    clearInputs();
  };

  return (
    <AgregarContainer>
      <MainTitleContainer>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para subir nuevo video</p>
      </MainTitleContainer>

      <FormStyles onSubmit={handleSubmit}>
        <TitleStyles>crear tarjeta</TitleStyles>

        <FormInput
          inputValue={title}
          placeholder="Título del video"
          name="titulo"
          minlength="5"
          title="Escribe min 5 caracteres para ser valido"
        >
          Título
        </FormInput>
        <OptionInput
          inputValue={category}
          placeholder="Selecciona una categoría"
          name="categoria"
        >
          Categoria
        </OptionInput>
        <FormInput
          inputValue={image}
          placeholder="link de la imagen"
          type="url"
          name="imagen"
					title="Coloca una Url de una Imagen"
        >
          Imagen
        </FormInput>
        <FormInput
          inputValue={videoLink}
          placeholder="Link del video"
          type="url"
          name="video"
          pattern="^https:\/\/www\.youtube\.com\/watch\?v=.*$"
          title="Coloca una Url de youtube"
        >
          Video
        </FormInput>
        <FormInput
          inputValue={description}
          big
          placeholder="Agrega una breve descripcion"
          name="descripcion"
          minlength="4"
          maxlength="5000"
        >
          Descripción
        </FormInput>

        <ButtonContainer>
          <ActionBtn type="submit" main>
            Guardar
          </ActionBtn>
          <ActionBtn action={clearInputs} type="button">
            limpiar
          </ActionBtn>
        </ButtonContainer>
      </FormStyles>
      {popup.show && <Popup message={popup.message} type={popup.type} />}
    </AgregarContainer>
  );
};

export default Agregar;