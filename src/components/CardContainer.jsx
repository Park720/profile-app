import '../styles/CardContainer.css';

const CardContainer = ({ children }) => {
    return (
    <div className="card-container-wrapper">
        <div className="card-grid-layout">
            {children}
        </div>
    </div>
    );
};

export default CardContainer;