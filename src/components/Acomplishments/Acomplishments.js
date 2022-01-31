import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 13, text: 'Open Source Projects'},
  { number: 3, text: 'Attended Online Courses', },
  { number: 10, text: 'Github Followers', },
  { number: 7, text: 'Github Stars', }
];

const Acomplishments = () => (
<Section id ="acomplishments">
  <SectionTitle>Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index)=>(
     <Box key={index}>
       <BoxNum>{card.number}+</BoxNum>
       <BoxText>{card.text}</BoxText>
</Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
