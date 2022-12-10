import itensEspaciais from "../../dados/Dados";
import {ColecaoDeItens} from "./styles";

console.log(itensEspaciais.produtos)

function Colecao(props) {
  return(
  <div className="containerItens">
  {itensEspaciais.produtos.filter((item) => item.nome.toLowerCase().includes(props.txt.toLowerCase()))
  .map((item) => {
    return(
    <ColecaoDeItens key={item.id}>
    <img className="imageItem" src={item.imagem}/>
    <h1 className="nomeItem">{item.nome}</h1>
    <p className="nomeDescricao">{item.descricao}</p>
    <p>R$: {item.preco},00</p>
    <button className="botao" onClick={()=>props.addItem(item)}>Adicionar ao Carrinho</button>
    </ColecaoDeItens>

    )
  })}
  </div>
)}
export default Colecao;
