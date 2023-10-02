import styled from "styled-components";

export const SecurityMessageContainer = styled.p`
  display: flex;
  align-items: center;
  color: var(--text-light);
  margin-top: 1rem;
  font-size: 0.875rem;

  img {
    width: 1rem;
    margin-left: 0.125rem;
    margin-bottom: 0.125rem;
  }

  @media screen and (max-width: 767px) {
    text-align: center;

    img {
      display: none;
    }
  }
`;
