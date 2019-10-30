import React from 'react';
import './home.css';
import Axios from 'axios';

const fs = require('browserify-fs');


export default function Home({history}){

  function handleStock(event){
    event.preventDefault();
    history.push('/stock');
  }
  
  function handleExit(event){
    event.preventDefault();
    history.push('/');
  }

  function handleCad(event){
    event.preventDefault();
    history.push('/cad');
  }

  function handleCadForn(event){
    event.preventDefault();
    history.push('/cadForn');
  }

  function handleListaForn(event){
    event.preventDefault();
    history.push('/ListaForn');
  }

  async function handleRelat(event){
    event.preventDefault();

    return await Axios.get('http://localhost:3333/produtos').then(response => {
      console.log("Relat:"+JSON.stringify(response.data));
      alert("Relatório Gerado Com Sucesso!");
    });
    

    
  }
  
  return(
    <div className="home">
      <div className="conteudo-home">
        <button 
          onClick={handleStock}
          className="btn" 
        >
          Estoque
        </button>

        <button 
          className="btn"
          onClick={handleCad}
        >
          Cadastrar Novo Produto
        </button>

        <button 
          className="btn"
          onClick={handleCadForn}
        >
          Cadastrar Novo Fornecedor
        </button>

        <button 
          onClick={handleListaForn}
          className="btn" 
        >
          Listar Fornecedores
        </button>

        <button 
          className="btn"
          onClick={handleRelat}
        >
          Gerar Relatório
        </button>


        <button 
          className="btn"
          onClick={handleExit}
        >
          Sair
        </button>
      </div>
      
    </div>
  )
}