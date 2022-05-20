
import { Link } from "react-router-dom";

export default function Movie({posterURL, id, tile}) {
return (
    <>
        <Link to={`filme/${id}` } >
            <div className="movie">
                <img src={posterURL} alt={tile}></img>
            </div>
        </Link>
    </>
    );
}
