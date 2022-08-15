import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare,
        orci in aliquet congue, augue massa iaculis diam, et elementum libero
        tortor a quam. Praesent volutpat lacinia sodales. Integer fermentum
        nulla non metus ultricies lobortis. Suspendisse aliquet iaculis dapibus.
        Maecenas lacus neque, laoreet eu sapien vel, feugiat suscipit orci.
        Pellentesque efficitur lectus sed neque convallis, ac tempor ex finibus.
        Proin porta libero id dolor lobortis, nec maximus metus ultrices.
      </SectionText>
      <Button onClick={() => (window.location.href = "/")}>
        More About Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
