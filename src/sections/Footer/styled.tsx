import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background: var(--surface-dark);
    padding: 3rem 2rem;
    font-family: var(--font-main);
    @media(max-width: 768px) {
      padding: 2rem 1rem;
    }
`;

export const FooterContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 768px) {
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
    }
`;

export const FooterCopy = styled.p`
    color: rgba(255,255,255,0.6);
    font-size: 0.9rem;
    margin: 0;
`;

export const FooterSocial = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const SocialLinkOne = styled.span`
    color: rgba(255,255,255,0.7);
    cursor: pointer;
    transition: color var(--transition-fast);
    font-weight: 600;
`;

export const SocialLinkTwo = styled.span`
    color: rgba(255,255,255,0.7);
    cursor: pointer;
    transition: color var(--transition-fast);
    font-weight: 600;
`;

