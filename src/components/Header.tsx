import React from "react";
import styled from "styled-components";

// Define a styled header element for the top of the page
const StyledHeader = styled.header`
    background-color: lightskyblue;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 1000px){
        text-align: center;
        width: 100%;}

`;

// Header component - renders the website's main title
// Made by Abdulmalik Alamoudi
export default function Header() {
    return (

        <StyledHeader>
            <h1>Dad Joke Central!</h1>
        </StyledHeader>

    );
}