import styled from "styled-components";

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: var(--background);
    border-bottom: 2px solid var(--border-accent);
    font-family: var(--font-main);
    box-shadow: var(--shadow-sm);
    @media(max-width: 768px) {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
    }
`;

export const HeaderContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 768px) {
      padding: 0.75rem 1rem;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const LogoEmoji = styled.span`
    font-size: 2rem;
    line-height: 1;
    @media(max-width: 768px) {
      font-size: 1.75rem;
    }
`;

export const LogoText = styled.span`
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-main);
    letter-spacing: -0.02em;
    @media(max-width: 768px) {
      font-size: 1.25rem;
    }
`;

export const LogoAccent = styled.span`
    color: var(--accent);
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
    @media(max-width: 768px) {
      display: none;
    }
`;

export const NavItemOne = styled.a`
    color: var(--text-main);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color var(--transition-fast);
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const NavItemTwo = styled.a`
    color: var(--text-main);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color var(--transition-fast);
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const NavItemThree = styled.a`
    color: var(--text-main);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color var(--transition-fast);
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const NavItemFour = styled.a`
    color: var(--text-main);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: color var(--transition-fast);
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const HeaderCta = styled.button`
    background: var(--gradient-accent);
    color: white;
    border: none;
    border-radius: var(--border-radius-full);
    padding: 0.75rem 1.75rem;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all var(--transition-smooth);
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: var(--shadow-neon);
    @media(max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }
`;

export const MobileMenuButton = styled.button`
    display: none;
    background: transparent;
    border: 2px solid var(--border-accent);
    border-radius: var(--border-radius-sm);
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    color: var(--text-main);
    font-weight: 700;
    @media(max-width: 768px) {
      display: block;
    }
`;

