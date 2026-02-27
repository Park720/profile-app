import { useState, useCallback } from 'react';

const useFilters = () => {
    const [name, setName] = useState("");

    const handleSearch = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const handleClear = useCallback(() => {
        setName("");
    }, []);

    return { name, handleSearch, handleClear }; 
};

export default useFilters;