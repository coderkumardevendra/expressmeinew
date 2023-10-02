import styled from "styled-components";

export const CnpjContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 0;
  gap: 1rem;
  width: 100%;
  height: 100%;
  max-width: 640px;
  margin: 0 auto;

  button.MuiButtonBase-root {
    height: 50px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: .875rem;
    padding: 0 1.5rem;
    background: var(--main-blue);

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 30px;
  }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
