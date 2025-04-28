import styled from "styled-components";

// Define a styled footer element with specific styles, matches the header
const StyledFooter = styled.footer`
    background-color: lightskyblue;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 1000px){
        text-align: center;
        width: 100%;}
`;

// Footer component - renders a styled footer with copyright text
// Made by Ana Julia Bortolossi
export default function Footer() {
    return (
        <StyledFooter>
            <p> All rights reserved by Boston University CS391 &copy; 2025 </p>
        </StyledFooter>
    );
}