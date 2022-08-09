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
            <HeaderThree>{each.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{each.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {each.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={each.visite}>Code</ExternalLinks>
            <ExternalLinks href={each.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
