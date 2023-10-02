import styled from "styled-components";

export const WarningMessage = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: var(--text-light);
  font-size: 0.875rem;
  line-height: 1.4;

  span {
    color: var(--main-blue);
  }

  @media screen and (max-width: 767px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 0.5rem;

  }
`;
