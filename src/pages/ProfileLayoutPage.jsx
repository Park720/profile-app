import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

const ProfileLayoutPage = () => {
    return (
        <>
        <Outlet />
        <p>Other Profiles Page</p>
        <Wrapper>
        <Link to="/other-profiles" className = "button" style={{marginTop: '20px', cursor: 'pointer'}}>Go Back</Link>
        </Wrapper>
        </>
    )
}

export default ProfileLayoutPage;