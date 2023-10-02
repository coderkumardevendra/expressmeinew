import { Link } from "react-router-dom";
import styled from "styled-components";

export const FinishShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--white);
  padding: 1.5rem;

  h1 {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--main-blue);
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    margin-top: 1rem !important;
    font-size: 0.875rem !important;
    color: var(--text-light) !important;
    font-weight: 300;
    text-align: center;
  }
`

export const FinishShopButton = styled.a`
  color: var(--white);
  background: var(--main-blue);
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 3.125rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--main-blue-hover);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.5rem;
    font-size: 0.75rem;
  }
`;

export const PaymentDetails = styled.div``;