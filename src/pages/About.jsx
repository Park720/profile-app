import React from 'react';
import Wrapper from '../components/Wrapper';
import AboutComponent from '../components/About';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

const About = ({  }) => {
    const { theme } = useContext(ModeContext);
return (
    <Wrapper id="about">
        <AboutComponent isNight={theme === "dark"} />
    </Wrapper>
);
};

export default About;