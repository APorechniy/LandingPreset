import React from "react";
import { PlayButton, PlayIcon, SectionHeader, SectionTitle, TeaserContainer, TeaserSection, VideoPlaceholder } from "./styled";

export const VideoTeaser = () => {
    return (
        <TeaserSection>
            <TeaserContainer>
                <SectionHeader>
                    <SectionTitle>Что говорят зрители?</SectionTitle>
                </SectionHeader>
                <VideoPlaceholder>
                    <PlayButton>
                        <PlayIcon>▶</PlayIcon>
                    </PlayButton>
                </VideoPlaceholder>
            </TeaserContainer>
        </TeaserSection>
    );
};
