import React from "react";
import { HeaderActions, HeaderContainer, HeaderCta, HeaderWrapper, LogoContainer, LogoEmoji, LogoText, MobileMenuButton, NavContainer, NavItemFour, NavItemOne, NavItemThree, NavItemTwo } from "./styled";

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoContainer>
                    <LogoEmoji>🎤</LogoEmoji>
                    <LogoText>ШУТКИ</LogoText>
                </LogoContainer>
                <NavContainer>
                    <NavItemOne>Афиша</NavItemOne>
                    <NavItemTwo>О комике</NavItemTwo>
                    <NavItemThree>Видео</NavItemThree>
                    <NavItemFour>Контакты</NavItemFour>
                </NavContainer>
                <HeaderActions>
                    <HeaderCta>Билеты</HeaderCta>
                    <MobileMenuButton>☰ МЕНЮ</MobileMenuButton>
                </HeaderActions>
            </HeaderContainer>
        </HeaderWrapper>
    );
};
