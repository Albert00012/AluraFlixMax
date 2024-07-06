import styled from "styled-components";
import CourseTitle from "../CourseTitle";
import Card from "../Card";
import { useContext } from "react";
import { GlobalContext } from "../../context/index";

const SectionStyles = styled.section`
  display: flex;
  width: 100%;
  padding: 40px 27px;
  background-color: var(--black);
  flex-direction: column;
  flex: 1;
  gap: 40px;

  @media (width > 1024px) {
    padding: 62px;
    align-items: center;
  }
`;

const CourseContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 12px;
  overflow-x: auto;
  gap: 30px;
  scrollbar-width: thin;
  scrollbar-color: var(--red) var(--scrollbar-color);

  @media (width > 1024px) {
    align-self: flex-start;
  }
`;

const CourseSection = ({ category }) => {
  const { videos } = useContext(GlobalContext);
  const { color, nombre } = category;

  return (
    <>
      {videos.length > 0 && (
        <SectionStyles>
          <CourseTitle color={color}>{nombre}</CourseTitle>
          <CourseContainer>
            {videos
              .filter((video) => video.Categoria === nombre)
              .map((video) => (
                <Card color={color} key={video.id} video={video} />
              ))}
          </CourseContainer>
        </SectionStyles>
      )}
    </>
  );
};

export default CourseSection;