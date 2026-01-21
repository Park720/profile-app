import card2 from '../assets/card2.png'

const Card2 = () => {
const name = "Jane Foster"
const title = "UX Designer"
const email = "jane.foster@example.com"

    return (
        <div className="card">
            <img src={card2} alt="card2" />
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

export default Card2