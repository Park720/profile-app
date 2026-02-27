import React from 'react';
import { Link } from 'react-router-dom';
import useTitles from '../hooks/useTitles';


const NotFound = () => {
    useTitles("404 Not Found");
return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to Homepage</Link>
    </div>
);
};

export default NotFound;
