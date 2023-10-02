import styled from "styled-components";

export const ConsultPageHeaderContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-light);
    margin-bottom: 1rem;
    max-width: 700px;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    align-items: start;

    p {
      text-align: start;
    }
  }
`;

export const ConsultPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 2rem 0;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const SendMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-light);
    margin-bottom: 1rem;
    max-width: 700px;
    text-align: start;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;

    button {
      font-family: 'Open Sans', sans-serif;
      border-radius: 1rem;
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  .image {
    display: block;
    width: 100%;
    margin-top: 2rem;

    img {
      width: 400px;
    }

    @media screen and (max-width: 767px) {
      text-align: center;
      img {
        width: 250px;
      }
    }
  }
`;

export const SendMessageForm = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-light);
    margin-bottom: 1rem;
    max-width: 700px;
    text-align: start;
  }
`;
