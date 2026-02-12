import React from 'react';
import Wrapper from '../components/Wrapper';
import FetchedProfiles from '../components/FetchedProfile';

const OtherProfiles = ({ isNight }) => {
return (
    <Wrapper id="other-profiles">
        <h2 style={{ padding: '20px', textAlign: 'center' }}>
            Fetched Profiles (API)
        </h2>
        <FetchedProfiles isNight={isNight} />
    </Wrapper>
);
};

export default OtherProfiles;