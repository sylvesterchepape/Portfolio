import React from 'react';
import { DiFirebase, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id ="tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
  Am hard worker inspired by innovation,I've worked with a range a technology during my Studied and beyond academics to be competetive and for personal Growth.
  From backend to front-end Development.
    </SectionText>
<List>
  <ListItem>
    <DiJava size ="3rem"/> 
    <ListContainer>
      <ListTitle>Languages</ListTitle>
      <ListParagraph>
       JavaScript.
        </ListParagraph>
     <ListParagraph>
       java fundermentals<br /> 
        and data structure .
        </ListParagraph>
        <ListParagraph>
        Good with C++ .
        </ListParagraph>
    </ListContainer>
    </ListItem>

    <ListItem>
    <DiFirebase size ="3rem"/> 
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        Node.js,Asp.netcore 
        </ListParagraph>
        <ListParagraph>
        Experience with <br />
        Firebase ,MongoDB ,MySql
        </ListParagraph>

    </ListContainer>
    </ListItem>

    <ListItem>
    <DiReact size ="3rem"/> 
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        React.js and NextJS<br />

        Bootstrap 4 <br />
        CSS3/HTML5 <br />
        Jquery
        </ListParagraph>

    </ListContainer>
    </ListItem>

    <ListItem>
    <DiZend size ="3rem"/> 
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br />
        tools like Figma
        </ListParagraph>

    </ListContainer>
    </ListItem>

    <ListItem>
    <DiZend size ="3rem"/> 
    <ListContainer>
      <ListTitle>Technical skills</ListTitle>
      <ListParagraph>
        Troubleshooting<br/>
        Configuring VOIP<br/>
        Ms server<br/>
        System documentation<br/>
        

        </ListParagraph>

    </ListContainer>
    </ListItem>
</List>

</Section>
);

export default Technologies;
