import styled from "styled-components";
import EditButton from "./EditButton";
import borrar from "./borrar.png";
import edit from "./editar.png";
import { useContext } from "react";
import { GlobalContext } from "../../context/index";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 374px;
  height: 278px;
  min-width: 374px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;

  @media (width > 1024px) {
    width: 430px;
    min-width: 430px;
    height: 318px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: ${(props) => `inset 0px 0px 10px 4px ${props.$color}`};
  pointer-events: none;
`;

const ImageStyles = styled.img`
  width: 100%;  
  aspect-ratio: 16 / 9;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  min-height: 52px;
  border-top: ${(props) => `4px solid ${props.$color}`};
`;

const Card = ({ color, video }) => {
  const { linkImagenVideo, titulo } = video;
  const { setSelectedVideo, deleteVideo } = useContext(GlobalContext);

  return (
    <CardContainer>
      <ImageStyles src={linkImagenVideo} alt={titulo} />
      <ButtonContainer $color={color}>
        <EditButton action={deleteVideo} video={video} img={borrar}>
          Borrar
        </EditButton>
        <EditButton action={setSelectedVideo} video={video} img={edit}>
          Editar
        </EditButton>
      </ButtonContainer>
      <Shadow $color={color} />
    </CardContainer>
  );
};

export default Card;