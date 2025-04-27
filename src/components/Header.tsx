import React from "react";
import styled from "styled-components";

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

export default function Header() {
    return (

        <StyledHeader>
            <h1>Dad Joke Central!</h1>
        </StyledHeader>

    );
}