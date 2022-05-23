import { Link } from "react-router-dom";

export default function Days({
    weekday,
    date,
    time1,
    time2,
    id1,
    id2}) {


return (
    <>
    <div className="Times">
        <h4>{weekday} - {date}</h4>
        <div className="Bottons">
            <Link to={`assentos/${id1}` } >
                <div className="BottonTime"><p>{time1}</p></div>
            </Link>
            <Link to={`assentos/${id2}` } >
                <div className="BottonTime"><p>{time2}</p></div>
            </Link>
        </div>
    </div> 
    </>
    );
}
