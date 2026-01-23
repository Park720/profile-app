import card1 from '../assets/card1.png'
import '../styles/card.css'

const Card1 = () => {
const name = "John Doe"
const title = "Web developer"
const email = "john.doe@example.com"

    return (
        <div className="card">
            <img src={card1} alt="card1" />
            <p>
                {name}
            </p>
            <p>
                {title}
            </p>
            <p>
                {email}
            </p>
        </div>
    )
}

export default Card1