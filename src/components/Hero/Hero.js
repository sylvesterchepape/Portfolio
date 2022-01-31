import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To <br />
       Sylvester Chepape's Portfolio
     </SectionTitle>
     <SectionText>
     Bsc in Computer Science graduates ,Highly qualified Backend Developer
     with 8 months experience in the industry using various technology to 
     deliver business solution . Enjoy creative problem solving and getting
     exposure to multiple projects, and I would excel in the collaborative
     environment on which your company prides itself.

     </SectionText>
     <Button onClick={() => window.location ="https://www.github.com"}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;