import React from "react";
import { flash } from "react-animations";
import styled, { keyframes } from 'styled-components';

const flashAnimation = keyframes`${flash}`;
const FlashDiv = styled.div`animation: 3s ${flashAnimation} infinite`;

function Saving() {
    return (
       <FlashDiv className="savingelement"><h1>SAVING!</h1></FlashDiv>
    )
}

export default Saving;