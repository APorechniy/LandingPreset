import styled from "styled-components";

export const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 6rem 0 0 0;
    background: var(--gradient-hero);
    position: relative;
    overflow: hidden;
    font-family: var(--font-main);
    @media(max-width: 768px) {
      min-height: auto;
      padding: 5rem 0 0 0;
    }
`;

export const HeroPattern = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--pattern-dots);
    background-size: 40px 40px;
    opacity: 0.6;
    pointer-events: none;
`;

export const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    @media(max-width: 768px) {
      flex-direction: column;
    }
`;

export const HeroContent = styled.div`
    width: 40%;
    padding-left: max(2rem, calc((100vw - var(--container-width)) / 2 + 2rem));
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media(max-width: 768px) {
      width: 100%;
      padding: 2rem 1rem;
      text-align: center;
      align-items: center;
    }
`;

export const HeroBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--gradient-purple);
    border-radius: var(--border-radius-full);
    padding: 0.5rem 1.25rem;
    width: fit-content;
    transform: rotate(-2deg);
    @media(max-width: 768px) {
      margin: 0 auto;
    }
`;

export const BadgeText = styled.span`
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
`;

export const HeroTitle = styled.h1`
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 7vw, 6rem);
    font-weight: 700;
    line-height: 0.95;
    color: white;
    margin: 0;
    text-transform: uppercase;
    @media(max-width: 768px) {
      font-size: clamp(2.5rem, 12vw, 4rem);
    }
`;

export const HeroTitleLineOne = styled.span`
    display: block;
`;

export const HeroTitleLineTwo = styled.span`
    display: block;
    color: var(--accent-tertiary);
    text-shadow: 0 0 20px rgba(245, 166, 35, 0.5);
`;

export const HeroDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255,255,255,0.8);
    margin: 0;
    max-width: 90%;
    @media(max-width: 768px) {
      font-size: 1rem;
      max-width: 100%;
    }
`;

export const HeroMeta = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    @media(max-width: 768px) {
      justify-content: center;
      gap: 1.5rem;
    }
`;

export const MetaItemOne = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const MetaItemTwo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const MetaIcon = styled.span`
    font-size: 1.5rem;
    @media(max-width: 768px) {
      font-size: 1.25rem;
    }
`;

export const MetaText = styled.span`
    color: rgba(255,255,255,0.9);
    font-weight: 500;
    @media(max-width: 768px) {
      font-size: 0.9rem;
    }
`;

export const HeroCta = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    @media(max-width: 768px) {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
    }
`;

export const PrimaryButton = styled.button`
    background: var(--gradient-accent);
    color: var(--text-inverse);
    border: none;
    border-radius: var(--border-radius-full);
    padding: 1.25rem 2.5rem;
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all var(--transition-smooth);
    box-shadow: var(--shadow-neon);
    text-transform: uppercase;
    @media(max-width: 768px) {
      padding: 1rem;
      font-size: 1.1rem;
      width: 100%;
    }
`;

export const SecondaryButton = styled.button`
    background: transparent;
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: var(--border-radius-full);
    padding: 1.25rem 2.5rem;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all var(--transition-smooth);
    text-transform: uppercase;
    @media(max-width: 768px) {
      padding: 1rem;
      font-size: 1.1rem;
      width: 100%;
    }
`;

export const HeroVisual = styled.div`
    width: 60%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    @media(max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
`;

export const ComicImage = styled.div`
    width: 100%;
    height: 85vh;
    max-width: 700px;
    background: linear-gradient(135deg, var(--accent-secondary), var(--accent));
    border-radius: var(--border-radius-lg) 0 0 var(--border-radius-lg);
    position: relative;
    box-shadow: -20px 0 60px rgba(0,0,0,0.3);
    border: 3px solid var(--accent-tertiary);
    border-right: none;
    @media(max-width: 768px) {
      height: 400px;
      max-width: 100%;
      border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
      border: 3px solid var(--accent-tertiary);
      border-bottom: none;
    }
`;

export const FloatingQuoteOne = styled.div`
    position: absolute;
    top: 15%;
    left: -2rem;
    background: var(--surface);
    border-radius: var(--border-radius-md);
    padding: 1rem 1.5rem;
    box-shadow: var(--shadow-lg);
    transform: rotate(-5deg);
    border-left: 4px solid var(--accent);
    @media(max-width: 768px) {
      left: 0.5rem;
      top: 5%;
      padding: 0.75rem 1rem;
    }
`;

export const FloatingQuoteTwo = styled.div`
    position: absolute;
    bottom: 20%;
    right: -1rem;
    background: var(--surface-dark);
    border-radius: var(--border-radius-md);
    padding: 1rem 1.5rem;
    box-shadow: var(--shadow-lg);
    transform: rotate(3deg);
    border-right: 4px solid var(--accent-tertiary);
    @media(max-width: 768px) {
      right: 0.5rem;
      bottom: 10%;
      padding: 0.75rem 1rem;
    }
`;

export const QuoteText = styled.p`
    font-weight: 600;
    margin: 0;
    color: var(--text-main);
    @media(max-width: 768px) {
      font-size: 0.85rem;
    }
`;

export const QuoteTextLight = styled.p`
    font-weight: 600;
    margin: 0;
    color: white;
    @media(max-width: 768px) {
      font-size: 0.85rem;
    }
`;

export const QuoteAuthor = styled.p`
    color: var(--accent);
    font-size: 0.8rem;
    margin: 0.25rem 0 0;
`;

export const ScrollHint = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.5);
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    @media(max-width: 768px) {
      display: none;
    }
`;

