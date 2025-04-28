import styled from "styled-components";

// Define a styled div for the About section box
const AboutBox = styled.div`
max-width: 600px;
margin: 20px auto;
padding: 20px;
background: white;
border-radius: 10px;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
text-align: center;
`

// About component - displays a short description of the project
// Made by Ana Julia Bortolossi
const About = () => {
    return (
        <AboutBox>
            <h2> About this project </h2>
            <p> This app was built as a final project using React and styled-components </p>
            <p> We used icanhazdadjoke API to fetch hilarious dad jokes and learn how to build styled React components! </p>
        </AboutBox>
    );
}

export default About;