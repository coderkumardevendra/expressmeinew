import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
  background: var(white);
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 767px) {
    padding-bottom: 0;
  }
`;

export const NavBarContent = styled.div`
  background: var(--white);
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 0.5rem;

    img {
      width: 115px;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .logo {
      font-size: 1rem;
      img {
        width: 120px;
      }
    }

    padding: 0.5rem 1rem;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const NavBarDesktop = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;

  @media screen and (max-width: 767px) { // mobile
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.75rem;
    gap: 1rem;
  }
`;

export const NavBarLink = styled(Link)`
  color: var(--text);
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

export const NavBarLinkOpen = styled(Link)`
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

export const NavBarMobile = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;

    .logo {
      font-size: 1rem;
      img {
        width: 140px;
        margin-right: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const NavBarContentMobile = styled.div`
  padding: 2rem 1rem;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: var(--text);

  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    font-weight: 500;
    gap: 1.125rem;
    font-size: 1rem;
  }
`;
