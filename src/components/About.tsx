import styled from "styled-components";

// Styled wrapper to center
const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
`;

// Styled div for the About section box
const AboutBox = styled.div`
max-width: 600px;
margin: 20px;
padding: 40px;
background: white;
border-radius: 10px;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
text-align: center;
`

// Styled paragraph component 
const Paragraph = styled.p`
  margin: 10px 0;
  text-align: center;
`;


// About component - displays a short description of the project
// Made by Ana Julia Bortolossi
const About = () => {
    return (
        <Wrapper>
            <AboutBox>
                <h2> About this project </h2>
                <Paragraph> This app was built as a final project using React and styled-components </Paragraph>
                <Paragraph> We used icanhazdadjoke API to fetch hilarious dad jokes and learn how to build styled React components! </Paragraph>
                <Paragraph> Created by: Abdulmalik, Ana Julia, Francisco, and Sofia </Paragraph>
            </AboutBox>
        </Wrapper>
    );
}

export default About;