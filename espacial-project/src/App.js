import React, { useState, useEffect } from "react";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import styled, { createGlobalStyle } from "styled-components";
import Colecao from "./components/colecao/Colecao";
import Carrinho from "./components/carrinho/Carrinho";
import { Father } from "./components/father/styles";
import { CarrinhoFixo } from "./components/CarrinhoFixo/styles";
import "./App.css";


const GlobalStyled = createGlobalStyle`
*{   
    margin: 0;
    padding: 0;  
}`;

function App() {
  
const[novoItem, setNovoItem] = useState([])
const[txt, setTxt] = useState("")
const [amountItems, setAmountItems] = useState(1)
const [totalPagar, setTotalPagar] = useState(" ")

useEffect(() =>{
  let savedTodo = JSON.parse(localStorage.getItem("savedTodo"))
      if (savedTodo) {
          setNovoItem(savedTodo);
      }
},[])

useEffect(() =>{
  localStorage.setItem("savedTodo", JSON.stringify(novoItem))
}, [novoItem])


useEffect(() =>{
  setTotalPagar(novoItem.reduce((acomulador, currentValue) =>  [+acomulador + +currentValue.preco * +currentValue.quantidade],0))
},[novoItem])

  
  function handleTxt(e) {
    setTxt(e.target.value)
  }

  function addItem(it) {
    //setNovoItem([...novoItem, item])
    setNovoItem(novoItem =>{
      if(novoItem.find(item => item.id === it.id)==null){
        return[...novoItem, {...it, quantidade: amountItems}]
      }else{
        return novoItem.map(item => {
          if (item.id === it.id) {
            return { ...item, quantidade: item.quantidade + amountItems}
          }else{
            return item
          }
        })
      }

    })

  } 
  function deleteItem(it){
    setNovoItem(novoItem.filter(item => item.id !== it.id))
  
    setAmountItems(1)
  }
  return (    
  <>
    <GlobalStyled />
      <Header />
    <Father className="mainContainer">
      <Filter handleTxt={handleTxt} />
      <Colecao className="containerColection" addItem={addItem} txt={txt} amountItems={amountItems} setAmountItems={setAmountItems}/>
      <Carrinho novoItem={novoItem} setNovoItem={setNovoItem} deleteItem={deleteItem} amountItems={amountItems} setAmountItems={setAmountItems} totalPagar={totalPagar}/>
      
    </Father>
  </>
  );
}

export default App;
