import styled from "styled-components";

export const TeaserSection = styled.section`
    padding: 5rem 2rem;
    background: var(--background-alt);
    font-family: var(--font-main);
    @media(max-width: 768px) {
      padding: 3rem 1rem;
    }
`;

export const TeaserContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    @media(max-width: 768px) {
      margin-bottom: 1.5rem;
    }
`;

export const SectionTitle = styled.h2`
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--text-main);
    text-transform: uppercase;
    @media(max-width: 768px) {
      font-size: 1.8rem;
    }
`;

export const VideoPlaceholder = styled.div`
    background: var(--surface-dark);
    border-radius: var(--border-radius-lg);
    aspect-ratio: 16 / 9;
    border: 3px solid var(--border-accent);
    box-shadow: var(--shadow-neon);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const PlayButton = styled.div`
    width: 80px;
    height: 80px;
    background: var(--gradient-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-neon);
    @media(max-width: 768px) {
      width: 60px;
      height: 60px;
    }
`;

export const PlayIcon = styled.span`
    color: white;
    font-size: 2.5rem;
    margin-left: 0.5rem;
    @media(max-width: 768px) {
      font-size: 2rem;
    }
`;

