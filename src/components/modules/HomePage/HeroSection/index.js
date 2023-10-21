import { Container } from "@mui/material";
import '../../../../index.css'
import React from "react";
import { useTranslation } from 'react-i18next';
import Btn from '../../../elements/Button/index';

function HeroSection() {

    return (
        <Container style={container}>
            <h1 style={heroMessage}>Corporate Business Cards for your Team</h1>
            <p style={heroDescription}>Enstant provides quick, easy & smart <b style={{ color: 'var(--primary-blue)'}}>Online Business Cards Ordering Tool</b> & <b style={{ color: 'var(--primary-blue)'}}>Web Portal.</b></p>
            <Btn label='View Demo'/>
            <img style={heroImg} src="/images/demo_preview.svg"></img>
        </Container>
    )
}

export default HeroSection;

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const heroMessage = {
    fontFamily: 'LexendPetaBold',
    letterSpacing: '-5px',
    textAlign: 'center'
}

const heroDescription = {
    fontFamily: 'LexendPetaLight',
    letterSpacing: '-2px',
    fontSize: '70%',
    textAlign: 'center',
    margin: '-10px 0px 30px 0px'
}

const heroImg = {
    width: '90%',
    marginTop: '20px'
}