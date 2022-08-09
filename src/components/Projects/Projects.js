import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((each) => (
        <BlogCard key={each.id}>
          <Img src={each.image} />
          <TitleContent>
            <HeaderThree title>{each.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{each.description}</CardInfo>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
