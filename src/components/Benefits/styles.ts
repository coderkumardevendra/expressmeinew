import { Box } from "@mui/material";
import styled from "styled-components";

export const BenefitsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: var(--main-white);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-top: 1.5rem;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const BenefitsContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;

  .image {
    background: var(--bg-blue);
    border-radius: 50%;
    padding: .5rem;
    margin-bottom: 1rem;
    
    img {
      width: 30px;
    }
  }

  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: .5rem;
  }

  p {
    font-size: .875rem;
    text-align: center;
    color: var(--text-light);
  }
`;
