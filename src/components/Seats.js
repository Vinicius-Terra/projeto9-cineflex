
import { useState, useEffect } from 'react';

export default function Seats({
    number,
    state,
    id,
    seatid,
    setSeatid,
    seatNumber,
    setSeatnumber}){ 

   
    const [selected, setSelected] = useState(false);
    
    useEffect(() => {
        if (selected) {
            let newArr = seatid
            newArr.push(id)
            
            setSeatid(newArr)
            
            let newArray = seatNumber
            newArray.push(number)

            setSeatnumber(newArray)
            
        }
        else{  
            setSeatid(seatid.filter((choseId) => choseId !== id));
            setSeatnumber(seatNumber.filter((choseNum) => choseNum !== number));

        }
	}, [selected]);
    
   console.log(seatNumber)

    return (
        <>
        {state ? 
        <div className={`seat ${selected ? "selected" : "available"}`} 
        onClick={()=> setSelected(!selected)}>
            <p>{number}</p>
        </div> 

        :
        <div className={`seat unavailable`}
        onClick={()=> alert("Esse assento não está disponível")}>
            <p>{number}</p>
        </div>
        }
        </>
        );
    
}