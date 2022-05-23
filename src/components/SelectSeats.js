
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seats from "./Seats";
import Footer from "./SharedComponents/Footer";



export default function SelectSeats({sucessInfo, setSucessInfo}) {

    

    const params = useParams();

    const id = params.idSessao
    
    const [movie, setMovie] = useState();

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [seatid, setSeatid] = useState([]);
    const [seatNumber, setSeatnumber] = useState([]);

    const navigate = useNavigate();

    let SeatsComponents = []


    useEffect(() => {
		const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`);

        
		request.then(resposta => {
            console.log(resposta.data)
            setMovie(resposta.data);
		});
	}, []);

    if (movie) {
        
        console.log("entrei")
        SeatsComponents = movie.seats.map((obj, index) =>  
        <Seats 
        key={index} 
        number={obj.name}
        state={obj.isAvailable}
        id = {obj.id}
        seatid= {seatid}
        setSeatid = {setSeatid}
        seatNumber = {seatNumber}
        setSeatnumber = {setSeatnumber}/> 
            );
    }
    else{
        return ( 
            <>
            <div className="top">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
        <Footer >
            <h1>Carregando...</h1>
        </Footer>
            </>
        );
    }


	
    function book (event) {
		event.preventDefault(); // impede o redirecionamento

        let body =    {
            ids: seatid,
            name: nome,
            cpf: cpf
        }

		const request = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body);

        let info = { 
            title: movie.movie.title,
            date: movie.day.date,
            time: movie.name,
            setsnumber: seatNumber,
            buyerName: nome,
            cpf: cpf,}

        request.then(()=> setSucessInfo(info),
        navigate('/sucesso'));
        

        request.catch(()=> setSeatid([]))
	}

return (
    <>
    <div className="padiing">
    <div className="top">
        <h2>Selecione o horário</h2>
    </div>
    
        <div className="seats">
            {SeatsComponents}
        </div>
        <div className="legends">
            <div className="legend">
                <div className="selected">
                    
                </div>
                <p>Selecionado</p>
            </div>
            <div className="legend">
                <div className="unavailable">
                    
                </div>
                <p>Disponível</p>
            </div>
            <div className="legend">
                <div className="available">
                    
                </div>
                <p>Indisponível</p>
            </div>
        </div>
         
            <form onSubmit={book}>
                <div className="">
                    <h5>Nome do comprador:</h5>
                    <input type="text" value={nome} className="inputs"
                    onChange={e => setNome(e.target.value) } required />
                </div>
                <div className="margin">
                    <h5>CPF do comprador:</h5>
                    <input type="number" value={cpf} className="inputs"
                    onChange={e => setCpf(e.target.value)} required/>
                </div>
        
                <div className="legends">
                <button type="submit"className="book"><p>Reservar assento(s)</p></button>
                </div>
            </form>
            
        <Footer >
            <div className="little">
            <img src={movie.movie.posterURL} alt={movie.movie.title}></img>    
            </div>
            <div className="legend-footer ">
                <h3>{movie.movie.title}</h3>
                <h3>{`${movie.name} - ${movie.day.weekday}`}</h3>
            </div>
        </Footer>
    </div>
    </>
    );
}