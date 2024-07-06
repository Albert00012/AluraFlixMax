import styled from "styled-components";
import CourseTitle from "../CourseTitle";


const BannerStyles = styled.section`
  display: flex;  
  width: 100%;
  height: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  gap: 20px;
  background-color: #FF0000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  mix-blend-mode: multiply;
  background-image: url("https://github.com/Albert00012/aluramaxflix/blob/main/img/bannerimagen.png?raw=true"); 
  box-shadow: inset 0px 0px 150px 5px #CE2222;
  
  @media (width > 1024px) {
    padding: 210px 28px;
    align-items: flex-end;
    gap: 36px;
    flex-direction: row-reverse;
  }
`;

const ImgContainerStyles = styled.figure`
  position: relative;
  width: 70%;
  border-radius: 15px;
  overflow: hidden;

  @media (width > 1024px) {
    width: 459px;
    min-width: 459px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: inset 0px 0px 10px 8px #FF0000;
`;

const CourseImagenStyles = styled.img`
  width: 100%;
`;

const DescriptionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--white);
  padding-bottom: 40px;

  @media (width > 1024px) {
    width: auto;
    gap: 67px;
    align-items: start;
    padding-bottom: 0;
  }
`;

const DescriptionTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;

  @media (width > 1024px) {
    font-size: 3.2rem;
  }
`;

const DescriptionStyles = styled.p`
  font-size: 1.8rem;
  font-weight: 100;
`;

const Banner = () => {
  return (
    <BannerStyles>
      <ImgContainerStyles>
        <CourseImagenStyles
          src="https://github.com/Albert00012/aluramaxflix/blob/main/img/banner1.png?raw=true"
          alt="" thumbnails
        />
        <Shadow />
      </ImgContainerStyles>
      <DescriptionContainer>
        <CourseTitle color="#E50000">Front end</CourseTitle>
        <div>
          <DescriptionTitle>Challenge React</DescriptionTitle>
          <DescriptionStyles>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </DescriptionStyles>
        </div>
      </DescriptionContainer>
    </BannerStyles>
  );
};

export default Banner;