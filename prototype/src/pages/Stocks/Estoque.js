import React, {Component} from 'react';
import Axios from 'axios';
import Tabela from './stock';

export default function Stock(){
    return(
      <Tabela></Tabela>
    );
  /* [
    {id: 1, nome: 'Prod1', preco: 'preco1', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 1, nome: 'Prod1', preco: 'preco1', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 1, nome: 'Prod1', preco: 'preco1', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 1, nome: 'Prod1', preco: 'preco1', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 1, nome: 'Prod1', preco: 'preco1', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 1, nome: 'Prod1', preco: 'preco1', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 1, nome: 'Prod1', preco: 'preco1', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 2, nome: 'Prod2', preco: 'preco2', cat: 'cat'},
    {id: 3, nome: 'Prod3', preco: 'preco3', cat: 'cat'}
  ];*/
}