import { Box } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: var(--main-white);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  transition: all 0.2s ease-in-out;
  position: relative;
  text-align: center;
  min-height: 250px;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--main-blue);
    margin-bottom: 1rem;
  }

  img {
    position: absolute;
    right: 15px;
    top: 10px;
    width: 35px;
    height: 35px;
    object-fit: fill;
  }

  p {
    font-size: 1rem;
    color: var(--text-light);
  }

  hr {
    width: 100%;
    max-width: 150px;
    opacity: 0.45;
    text-align: center;
    margin: 1rem 0;
    border: 1px solid var(--text-light);
  }

  &:hover {
    transform: scale(1.02);
  }

  a {
    font-family: 'Open Sans', sans-serif;
  }

  @media screen and (max-width: 767px) {
    min-height: auto;

    h1 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.9rem;
    }

    a {
      font-size: 0.875rem;
    }
    
  }
`;
