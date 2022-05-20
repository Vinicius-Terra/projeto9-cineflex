import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/reset.css";
import "./assets/css/style.css";


import Header from "./components/Header";
import Main from "./components/Main";
import MovieTime from "./components/MovieTime";


function App() {
	return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/filme/:idFilme" element={<MovieTime />}/>
        </Routes>
    </BrowserRouter>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));