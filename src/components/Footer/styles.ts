import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  flex-direction: column;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: 100%;

  .footer_logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--bg-blue);

    img {
      width: 240px;
      height:auto;
      margin-right: 0.5rem;

      @media screen and (max-width: 767px) {
        width: 160px;
        height:auto;
      }
    }
  }

  .footer_paths,
  .footer_about {
    align-self: flex-start;
    h2 {
      font-size: 1.125rem;
      font-weight: 500;
      color: var(--main-blue);
      margin-bottom: 1rem;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      font-weight: 300;
      padding: 5px 0;

      svg {
        opacity: 0.75;
        margin-right: 0.5rem;
      }
    }

    @media screen and (max-width: 767px) {
      margin-bottom: 1rem;

      h2 {
        font-size: 1rem;
      }

      li {
        font-size: 0.9rem;
        padding: 5px 0;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.75rem;
    gap: 1rem;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterCopy = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  color: var(--text-light);
  font-size: 0.875rem;
  padding-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: var(--text);
  font-weight: 300;
  text-decoration: none;
  position: relative;
  font-family: 'Open Sans', sans-serif;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--text);
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  &:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;
