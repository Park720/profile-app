import React, { useState, useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
import Wrapper from '../components/Wrapper';
import Filters from '../components/Filters';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import { ProfileContext } from '../context/ProfileContext';


const Home = ({  }) => {
    const { theme } = useContext(ModeContext);
    const { profiles } = useContext(ProfileContext);
    
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
            isNight={theme === "dark"}
        />
        <CardContainer title="Student Profiles" isNight={theme === "dark"}>
            {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile) => (
                <Card
                    key={profile.id}
                    name={profile.name}
                    year={profile.year}
                    major={profile.major}
                    email={profile.email}
                    image={profile.image}
                    isNight={theme === "dark"}
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