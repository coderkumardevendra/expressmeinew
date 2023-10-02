import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin-top: 1rem !important;
  font-size: 0.8rem !important;
  color: var(--main-blue);
  text-align: left;
`;

const StyledLink = styled(Link)`
  color: var(--main-blue);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DataColectWarning = () => {
  return (
    <StyledParagraph>
      Os seus dados pessoais serão utilizados para processar a sua compra,
      apoiar a sua experiência em todo este site e para outros fins descritos na
      nossa{" "}
      <StyledLink to={"/politica-de-privacidade"} target="_blank">
        política de privacidade
      </StyledLink>
      .
    </StyledParagraph>
  );
};

export default DataColectWarning;
