import React from 'react';
import Wrapper from '../components/Wrapper';
import AboutComponent from '../components/About';

const About = ({ isNight }) => {
return (
    <Wrapper id="about">
        <AboutComponent isNight={isNight} />
    </Wrapper>
);
};

export default About;