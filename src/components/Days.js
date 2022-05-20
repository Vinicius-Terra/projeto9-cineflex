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
            <div className="BottonTime">{time1}</div>
            <div className="BottonTime">{time2}</div>
        </div>
    </div> 
    </>
    );
}
