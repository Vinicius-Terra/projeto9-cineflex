
import { useNavigate } from 'react-router-dom';


export default function Success({sucessInfo}) {


    const navigate = useNavigate();


    if (sucessInfo) {
        let seats = sucessInfo.setsnumber.map((seat)=><p>Assento {seat}</p>)
        return (
        <>
        <div className="top success">
            <h2>Pedido feito</h2>
            <h2>com sucesso!</h2>
        </div>
        <div className="padiing">
            <div className="sec">
                <h3>Filme e sessão</h3>
                <p>{sucessInfo.title}</p>
                <p>{sucessInfo.date} --- {sucessInfo.time}</p>
            </div>
            <div className="sec">
                <h3>Ingressos</h3> 
                <p>{seats}</p>
            </div>
            <div className="sec">
                <h3>Comprador</h3> 
                <p>{sucessInfo.buyerName}</p>
                <p>{sucessInfo.cpf}</p>
            </div>
        </div>
        <div className="legends">
                <button className="book" onClick={()=> navigate('/')}>
                    <p>Voltar pra Home</p>
                </button>
        </div>
        </>
            );
    }
    else{
        return ( 
            <>
            <div className="top">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            </>
        );
    }


}
