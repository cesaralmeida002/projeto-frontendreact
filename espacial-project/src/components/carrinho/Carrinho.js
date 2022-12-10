import { useState } from "react";
import { CarrinhoStyle, CarrinhoFixo } from "./styles";

function Carrinho(props) {

  const [preco, setPreco] = useState()

  const adicinarQuantidade = (it) =>{
    // props.setAmountItems(item.quantidade = props.amountItems+1)

    
    // setPreco(item.preco)

    const novo = props.novoItem.map(item => {
      if (item.id === it.id) {
        return { ...item, quantidade: it.quantidade + 1}
      }else{
        return item
      }
    })
    props.setNovoItem(novo)

  }

  const deleteQuantidade = (it) =>{
    //props.setAmountItems(props.amountItems <= 1 ? 1: item.quantidade = props.amountItems-1)

    const novo = props.novoItem.map(item => {
      if (item.id === it.id) {
        return { ...item, quantidade: it.quantidade - 1}
      }else{
        return item
      }
    })
    props.setNovoItem(novo)
    if (it.quantidade <= 1){
      props.deleteItem(it.id)
    }
   
  }

  return(
  <CarrinhoFixo>
  {props.novoItem.map((item) => {
    return(
    <CarrinhoStyle key={item.id}>
    <div className="containerItemCarrinho">
      <h5> {item.nome} </h5>
      <button onClick={()=>deleteQuantidade(item)}>-</button>
      <span>{item.quantidade}</span>
      <button onClick={()=>adicinarQuantidade(item)}>+</button>
      <p> {item.preco} </p>
      <button onClick={() => props.deleteItem(item)}> Delete </button>
      
      
    </div>
    {/* <img src={item.imagem}/>
    <button onClick={()=>props.addItem(item)}>Adicionar ao Carrinho</button> */}
    
    </CarrinhoStyle>

    )
  })}
  <p className="totalPagar">Total a Pagar = {props.totalPagar}</p>
  </CarrinhoFixo>
)}
export default Carrinho;