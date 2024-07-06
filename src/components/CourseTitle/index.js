import styled from "styled-components";

const TitleStyles = styled.h2`
  width: 100%;
  padding: 17px 0;
  font-size: 2.4rem;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
	border-radius: 15px;
	color: var(--white);
  background-color: ${(props) => props.$color};

	@media (width > 1024px) {
    width: 432px;
		font-size: 3.2rem;
	}
`;

const CourseTitle = ({ children, color }) => {
  return <TitleStyles $color={color}>{children}</TitleStyles>;
};

export default CourseTitle;