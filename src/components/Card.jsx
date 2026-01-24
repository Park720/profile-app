import "../styles/card.css";

const Card = ({name, year, major, email, image}) => {
    return (
    <div className="profile-card">
        <div className="top">
            <img src={image} alt={name} />
        </div>
            <div className="bottom">
            <p>{name}</p>
            <p>{year}</p>
            <p>{major}</p>
            <p>{email}</p>
        </div>
    </div>
    );
};

export default Card;