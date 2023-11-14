import "./Styles/Painting.css"

function Painting(props) {
    return (
        <div className="painting">
            <img src={props.imgSource} alt="" />
            <div className="paintingInfo">
                <h3>{props.name}</h3>
                <p>{props.year}</p>
            </div>
        </div>
    );
}

export default Painting;