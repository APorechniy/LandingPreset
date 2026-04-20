import React from "react";
import { FooterContainer, FooterCopy, FooterSocial, FooterWrapper, SocialLinkOne, SocialLinkTwo } from "./styled";

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterCopy>© 2026 Алексей Смирнов. Все шутки защищены.</FooterCopy>
                <FooterSocial>
                    <SocialLinkOne>YouTube</SocialLinkOne>
                    <SocialLinkTwo>Telegram</SocialLinkTwo>
                </FooterSocial>
            </FooterContainer>
        </FooterWrapper>
    );
};
