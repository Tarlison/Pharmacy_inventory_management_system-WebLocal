import React, {useState, Component} from 'react';
import {withRouter} from 'react-router-dom';
import Axios from 'axios';

import './edit.css';

function Editar(props){

  const[nomeAlt, setNomeAlt] = useState('');
  const[descAlt, setdescAlt] = useState('');
  const[precoAlt, setPrecoAlt] = useState('');
  const[quantidadeAlt, setQntAlt] = useState('');
  const[nome_fornecedorAlt, setNomeFornAlt] = useState('');

  const {history} = props.history;
  const dados = JSON.stringify(props.location.data);
  const obj = JSON.parse(dados);

  console.log("q q tem : " + obj.nome);

  function handleSubmit(event){
    event.preventDefault();

    let objAlt = {
      nome: nomeAlt,
      desc: descAlt,
      preco: precoAlt,
      quantidade: quantidadeAlt,
      nome_fornecedor: nome_fornecedorAlt
    };

    if (objAlt.nome === ''){
      objAlt = {
        nome: obj.nome,
        desc: descAlt,
        preco: precoAlt,
        quantidade: quantidadeAlt,
        nome_fornecedor: nome_fornecedorAlt
      };
    }

    if (objAlt.desc === ''){
      objAlt = {
        nome: objAlt.nome,
        desc: obj.desc,
        preco: precoAlt,
        quantidade: quantidadeAlt,
        nome_fornecedor: nome_fornecedorAlt
      };
    }

    if (objAlt.preco === ''){
      objAlt = {
        nome: objAlt.nome,
        desc: objAlt.desc,
        preco: obj.preco,
        quantidade: quantidadeAlt,
        nome_fornecedor: nome_fornecedorAlt
      };
    }

    if (objAlt.quantidade === ''){
      objAlt = {
        nome: objAlt.nome,
        desc: objAlt.desc,
        preco: objAlt.preco,
        quantidade: obj.quantidade,
        nome_fornecedor: nome_fornecedorAlt
      };
    }

    if (objAlt.nome_fornecedor === ''){
      objAlt = {
        nome: objAlt.nome,
        desc: objAlt.desc,
        preco: objAlt.preco,
        quantidade: objAlt.quantidade,
        nome_fornecedor: obj.nome_fornecedor
      };
    }


    const jsonStringfied = JSON.stringify(objAlt);

    console.log(jsonStringfied);

    Axios.put(`http://localhost:3333/produtos/${obj.id}`,jsonStringfied,{
      headers: {
          'Content-Type': 'application/json',
      }}).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });

    alert("Produto Alterado Com Sucesso!")
  }


  function cancelEd(event){
    event.preventDefault();


  }

  return(

    <div className="editar">
      
      <p>Editar Produto</p>

      <div className="editor-container">

        <form onSubmit={handleSubmit}>

        <label htmlFor="nome">Nome</label>
        <input 
          id="nomeAlt"
          placeholder={obj.nome}
          value={nomeAlt}
          onChange={event => setNomeAlt(event.target.value)}
        />

        <label htmlFor="desc">Descrição</label>
        <input 
          id="descAlt"
          placeholder={obj.desc}
          value={descAlt}
          onChange={event => setdescAlt(event.target.value)}
        />

        <label htmlFor="preco">Preço</label>
        <input
          id="precoAlt"
          placeholder={obj.preco}
          value={precoAlt}
          onChange={event => setPrecoAlt(event.target.value)}
        
        />

        <label htmlFor="qnt">Quantidade</label>
        <input
          id="qntAlt"
          placeholder={obj.quantidade}
          value={quantidadeAlt}
          onChange={event => setQntAlt(event.target.value)}
        
        />

        <label htmlFor="forn">Fornecedor</label>
        <input
          id="fornAlt"
          placeholder={obj.nome_fornecedor}
          value={nome_fornecedorAlt}
          onChange={event => setNomeFornAlt(event.target.value)}
        
        />

        <div className="buttonContainer">
          <button type="submit" className="btn">Alterar</button>
          <button onClick={cancelEd} className="btn">Cancelar</button>
        </div>

        </form>
      </div>
    </div>
  )
}

export default withRouter(Editar);