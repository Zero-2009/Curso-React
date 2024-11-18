function Card() {
    const width = {
        width: "350px"
    }
    return (
        <div className="card" style={width}>
            <div className="card-body">
                <CardBody />
            </div>
        </div>
    );
}

function CardBody() {
    return (
        <>
            <h5 className="card-title" >Card Title</h5>
                <p className="card-text">
                    Some quick example text to build on the card  title and make up the 
                    bulk of the cards content.
                </p>
        </>
    );
}

export default Card;