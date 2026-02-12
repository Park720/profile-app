import React, { useState } from 'react';
import Wrapper from '../components/Wrapper';
import Filters from '../components/Filters';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';

const Home = ({ profiles, isNight }) => {
    const [major, setMajor] = useState("");
    const [year, setYear] = useState("");
    const [name, setName] = useState("");

    const majors = [...new Set(profiles.map(profile => profile.major))];
    const years = [...new Set(profiles.map(profile => profile.year))];

    const handleMajor = (e) => setMajor(e.target.value);
    const handleYear = (e) => setYear(e.target.value);
    const handleSearch = (e) => setName(e.target.value);

    const handleClear = () => {
        setMajor("");
        setYear("");
        setName("");
    };

    const filteredProfiles = profiles.filter(profile => {
        return (
            (major === "" || profile.major === major) &&
            (year === "" || profile.year === year) &&
            (name === "" || profile.name.toLowerCase().includes(name.toLowerCase()))
        );
    });

return (
    <main>
        <Wrapper id="profiles">
        <Filters 
            majors={majors} 
            major={major}
            years={years}
            year={year}
            name={name}
            handleMajor={handleMajor} 
            handleYear={handleYear}
            handleSearch={handleSearch} 
            handleClear={handleClear} 
            isNight={isNight}
        />
        <CardContainer title="Student Profiles" isNight={isNight}>
            {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile) => (
                <Card
                    key={profile.id}
                    name={profile.name}
                    year={profile.year}
                    major={profile.major}
                    email={profile.email}
                    image={profile.image}
                    isNight={isNight}
                />
            ))
            ) : (
            <p style={{ textAlign: 'center', width: '100%', padding: '2rem' }}>
                No Result.
            </p>
        )}
        </CardContainer>
        </Wrapper>
    </main>
);
};

export default Home;