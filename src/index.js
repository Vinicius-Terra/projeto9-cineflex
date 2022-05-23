import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import "./assets/css/reset.css";
import "./assets/css/style.css";


import Header from "./components/Header";
import Main from "./components/Main";
import MovieTime from "./components/MovieTime";
import SelectSeats from "./components/SelectSeats";
import Success from "./components/Success";




function App() {

    const [sucessInfo, setSucessInfo] = useState();

	return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sessoes/:idFilme" element={<MovieTime />}/>
            <Route path="/sessoes/:idFilme/assentos/:idSessao" 
            element={<SelectSeats sucessInfo={sucessInfo} setSucessInfo={setSucessInfo}/>}/>
            <Route path="/sucesso" 
            element={<Success sucessInfo={sucessInfo}/>}/>
        </Routes>
    </BrowserRouter>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));