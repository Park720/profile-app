import "../styles/filter.css"


const Filters = ({ majors, major, name, handleMajor, handleSearch, handleClear }) => {
    return (
        <div className="filter-container">
            <div className="filter-dropdown">
                <label htmlFor="major">Select a Major:</label>
                <select id="major" value={major} onChange={handleMajor}>
                    <option value="">All</option>
                    {
                        majors.map((major) => (
                            <option key={major} value={major}>{major}</option>
                        ))
                    }
                </select>
            </div>
            <div className="filter-search">
                <label htmlFor="search">Search a Name:</label>
                <input 
                    id="search" 
                    onChange={handleSearch} 
                    value={name} 
                />  
            </div>
            <div className="filter-clear">
                <button onClick={handleClear}>Clear Filters</button>
            </div>
        </div>
    );
}

export default Filters;