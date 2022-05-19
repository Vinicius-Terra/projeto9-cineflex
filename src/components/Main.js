
import { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from "./Movie";


export default function Main() {
    const [movie, setMovie] = useState([]);
    let MovieComponents = []

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        
		request.then(resposta => {
            console.log(resposta.data)
            setMovie(resposta.data);
            console.log(movie)
		});
	}, []);

 
    return (
    <>
        <div className="top">
             <h2>Selecione o filme</h2>
        </div>
        <div className="movies">
            {MovieComponents}
        </div>
    </>
    )
}
