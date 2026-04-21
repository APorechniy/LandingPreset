import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`

export const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 8rem 2rem 4rem;
    background: var(--gradient-hero);
    position: relative;
    overflow: hidden;
    font-family: var(--font-main);
    @media(max-width: 768px) {
      flex-direction: column;
      padding: 4rem 1rem 2rem;
    }
`;

export const HeroContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 2;
    @media(max-width: 768px) {
      max-width: var(--container-mobile-width);
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const HeroTitle = styled.h1`
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 8vw, 6rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-main);
    margin: 0 0 1.5rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    max-width: 1100px;
    animation: ${fadeIn} 2s;
`;

export const HeroTitleGold = styled.span`
    color: var(--accent);
    text-shadow: 0 0 20px rgba(201, 161, 59, 0.5);
`;

export const HeroImage = styled.img`
    width: 300px;
    height: 300px;
`;

