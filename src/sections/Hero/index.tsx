import React from "react";
import { BadgeText, ComicImage, FloatingQuoteOne, FloatingQuoteTwo, HeroBadge, HeroContainer, HeroContent, HeroCta, HeroDescription, HeroMeta, HeroPattern, HeroSection, HeroTitle, HeroTitleLineOne, HeroTitleLineTwo, HeroVisual, MetaIcon, MetaItemOne, MetaItemTwo, MetaText, PrimaryButton, QuoteAuthor, QuoteText, QuoteTextLight, ScrollHint, SecondaryButton } from "./styled";

export const Hero = () => {
    return (
        <HeroSection>
            <HeroPattern></HeroPattern>
            <HeroContainer>
                <HeroContent>
                    <HeroBadge>
                        <BadgeText>🔥 ТУР 2026 🔥</BadgeText>
                    </HeroBadge>
                    <HeroTitle>
                        <HeroTitleLineOne>СМЕХ БЕЗ</HeroTitleLineOne>
                        <HeroTitleLineTwo>ТОРМОЗОВ</HeroTitleLineTwo>
                    </HeroTitle>
                    <HeroDescription>Алексей «Шутник» Смирнов с новой программой. Честно о жизни, работе и бывших. Будет больно от смеха.</HeroDescription>
                    <HeroMeta>
                        <MetaItemOne>
                            <MetaIcon>📍</MetaIcon>
                            <MetaText>Москва, Crocus City Hall</MetaText>
                        </MetaItemOne>
                        <MetaItemTwo>
                            <MetaIcon>📅</MetaIcon>
                            <MetaText>15 Ноября, 19:00</MetaText>
                        </MetaItemTwo>
                    </HeroMeta>
                    <HeroCta>
                        <PrimaryButton>Купить билет</PrimaryButton>
                        <SecondaryButton>Смотреть трейлер</SecondaryButton>
                    </HeroCta>
                </HeroContent>
                <HeroVisual>
                    <ComicImage>
                        <FloatingQuoteOne>
                            <QuoteText>«Я сам в шоке, что приехал»</QuoteText>
                            <QuoteAuthor>— Зритель из Воронежа</QuoteAuthor>
                        </FloatingQuoteOne>
                        <FloatingQuoteTwo>
                            <QuoteTextLight>«У меня пресс заболел!»</QuoteTextLight>
                            <QuoteAuthor>— Девушка с 3 ряда</QuoteAuthor>
                        </FloatingQuoteTwo>
                    </ComicImage>
                </HeroVisual>
                <ScrollHint>↓ Листай, там смешнее ↓</ScrollHint>
            </HeroContainer>
        </HeroSection>
    );
};
