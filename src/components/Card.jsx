import imgStar from "../assets/star.webp";

const Card = ({ data: props }) => {
    console.log(props.soldOut);
    return (
        <div className="card">
            {props.soldOut === 0 && <span className="badge"> SOLD OUT </span>}

            <img src={props.img} alt={props.title} className="card-image" />

            <div className="container">

                <section>
                    <img src={imgStar} alt="Star" className="star-image" />

                    <p>
                        {props.rating}
                        <span className="muted"> ({props.peopleRated}) | Bangalore </span>
                    </p>
                </section>

                <h2> {props.title} </h2>
                <hr />

                <p className="footer">
                    <strong> From Rs {props.cost} </strong> / person
                </p>
            </div>
        </div >
    );
};

export default Card;