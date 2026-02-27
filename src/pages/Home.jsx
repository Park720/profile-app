import React, { useState, useContext } from 'react';
import { ModeContext } from '../context/ModeContext';
import Wrapper from '../components/Wrapper';
import Filters from '../components/Filters';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import { ProfileContext } from '../context/ProfileContext';
import { useMemo, useCallback } from 'react';
import useFilters from '../hooks/useFilters';
import useTitles from '../hooks/useTitles';


const Home = ({  }) => {
    useTitles("Home");
    const { theme } = useContext(ModeContext);
    const { profiles } = useContext(ProfileContext);
    const { name, handleSearch, handleClear: clearSearch } = useFilters();
    
    const [major, setMajor] = useState("");
    const [year, setYear] = useState("");

    const majors = useMemo(() => [...new Set(profiles.map(p => p.major))], [profiles]);
    const years = useMemo(() => [...new Set(profiles.map(p => p.year))], [profiles]);

    const handleMajor = useCallback((e) => {
        setMajor(e.target.value);
    }, []);
    const handleYear = useCallback((e) => {
        setYear(e.target.value);
    }, []);

    const handleClearAll = useCallback(() => {
        setMajor("");
        setYear("");
        clearSearch();
    }, [clearSearch]);
    
    const filteredProfiles = useMemo(() => {
        return profiles.filter(profile => {
            return (
                (major === "" || profile.major === major) &&
                (year === "" || profile.year === year) &&
                (name === "" || profile.name.toLowerCase().includes(name.toLowerCase()))
            );
        });
    }, [profiles, major, year, name]);

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
            handleClear={handleClearAll} 
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