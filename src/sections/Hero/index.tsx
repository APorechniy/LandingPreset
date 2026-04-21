import React from "react";
import { HeroContainer, HeroContent, HeroImage, HeroSection, HeroTitle } from "./styled";

export const Hero = () => {
    return (
        <HeroSection >
            <HeroContainer >
                <HeroContent >
                    <HeroTitle >Samarkand </HeroTitle>
                    <HeroImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEdt589p3IHkQjX4BFqxNxpfESnbeOJ6M2A&s' >
                    </HeroImage>
                </HeroContent>
            </HeroContainer>
        </HeroSection>
    );
};
