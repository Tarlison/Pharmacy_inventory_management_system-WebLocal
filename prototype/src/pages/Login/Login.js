import React,  {useState} from 'react';
import './login.css';
import logo from '../../assets/Skill_12530.svg';
import { CoverageMap } from 'istanbul-lib-coverage';
import backgroundI from '../../assets/Warspite.jpg';

export default function Login({ history }){
  function handleSubmit(event){
    event.preventDefault(); //previne que o form faça sua função normal(trocar de página)

    history.push('/home');
  }
    
  return (
    <div className="login">
      
    <div className="main">
    <p> Farmácia FarMelhor </p>
      <div className="conteudo-login">
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            placeholder="E-mail"
          />

          <label htmlFor="text">Senha</label>
          <input 
            type="password" 
            placeholder="Senha"
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
    </div>
  )
}