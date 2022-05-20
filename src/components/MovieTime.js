
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/SharedComponents/Footer";
import Days from "../components/Days";



export default function MovieTime() {

    const params = useParams();
    console.log(params)

    const id = params.idFilme
    const [movie, setMovie] = useState();
    let DaysComponents = []

    useEffect(() => {
		const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);

        
		request.then(resposta => {
            console.log(resposta.data)
            setMovie(resposta.data);
		});
	}, []);

    if (movie) {
        DaysComponents = movie.days.map((obj, index) =>  
        <Days 
        key={index} 
        weekday={obj.weekday} 
        date={obj.date}
        time1={obj.showtimes[0].name}
        time2={obj.showtimes[1].name}
        id1={obj.showtimes[0].id}
        id2={obj.showtimes[1].id}/> 
            );
    }
    else{
        return ( 
            <>
            <div className="top">
                <h2>Selecione o horário</h2>
            </div>
        <Footer >
            <h1>Carregando...</h1>
        </Footer>
            </>
        );
    }


return (
    <>
    <div className="top">
        <h2>Selecione o horário</h2>
    </div>
    <div className="padiing"> 
        {DaysComponents}
        <Footer >
            <div className="little">
            <img src={movie.posterURL} alt={movie.title}></img>    
            </div>
            <h3>{movie.title}</h3>
        </Footer>
    </div>
    </>
    );
}
