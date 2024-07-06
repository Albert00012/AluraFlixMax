import styled from "styled-components";
import closeBtn from "./cerrar.png";
import FormInput from "../FormInput";
import OptionInput from "../OptionInput";
import ActionBtn from "../ActionBtn";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/index";

const Overlay = styled.div`
  background-color: var(--shadow-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`;

const DialogStyles = styled.dialog`
  position: absolute;
  margin: 0 auto;
  width: 93%;
  padding: 60px 12px;
  top: 30px;
  border-radius: 15px;
  border: 5px solid #d12222;
  background-color: var(--black);
  z-index: 4;

  @media (width > 1024px) {
    width: 70%;
    padding: 60px 140px;
    top: 50px;
    
  }
`;

const FormStyles = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const TitleStyles = styled.legend`
  font-size: 3.2rem;
  font-weight: bold;
  color: var(--white);
  text-transform: uppercase;

  @media (width > 1024px) {
    font-size: 6rem;
    align-self: flex-start;
  }
`;

const ButtonCerrar = styled.button`
  position: absolute;
  height: 52px;
  width: 52px;
  top: -44px;
  right: 4px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
  }

  @media (width > 1024px) {
    right: -125px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (width > 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const Modal = ({ video, closeModal }) => {
  const {
    title,
    image,
    category,
    videoLink,
    description,
    handleInputChange,
    updateVideoInfo,
    clearInputs,
  } = useContext(GlobalContext);

  useEffect(() => {
    const getInitialValue = () => {
      if (video) {
        handleInputChange("titulo", video.titulo || "");
        handleInputChange("categoria", video.Categoria || "");
        handleInputChange("imagen", video.linkImagenVideo || "");
        handleInputChange("video", video.linkVideo || "");
        handleInputChange("descripcion", video.descripcion || "");
      }
    };

    getInitialValue();
  }, [video]);

  const handleSubmit = (e) => {
    let id = video.id;
    let info = { title, image, category, videoLink, description, id };

    updateVideoInfo(info);
    closeModal();
  };

  return (
    <>
      {video && (
        <>
          <Overlay />
          <DialogStyles open={!!video}>
            <FormStyles method="dialog" onSubmit={handleSubmit}>
              <ButtonCerrar type="button" onClick={closeModal}>
                <img src={closeBtn} alt="Cerrar" />
              </ButtonCerrar>
              <TitleStyles>Editar card:</TitleStyles>

              <FormInput
                inputValue={title}
                placeholder="Título del video"
                from="modal"
                name="titulo"
                minlength="5"
                title="tienes que tener al menos 5 caracteres para ser valido"
              >
                Título
              </FormInput>
              <OptionInput
                inputValue={category}
                placeholder="Escoja una categoría"
                from="modal"
                name="categoria"
              >
                Categoria
              </OptionInput>
              <FormInput
                inputValue={image}
                placeholder="link de la imagen"
                type="url"
                from="modal"
                name="imagen"
                title="Youtube-Url o Web"
              >
                Imagen
              </FormInput>
              <FormInput
                inputValue={videoLink}
                placeholder="Link del video"
                type="url"
                from="modal"
                name="video"
                pattern="^https:\/\/www\.youtube\.com\/watch\?v=.*$"
                title="Youtube-Url"
              >
                Video
              </FormInput>
              <FormInput
                inputValue={description}
                big
                placeholder="¿De qué se trata este vídeo?"
                from="modal"
                name="descripcion"
                minlength="4"
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
          </DialogStyles>
        </>
      )}
    </>
  );
};

export default Modal;