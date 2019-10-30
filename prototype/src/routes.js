import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/home';
import Stock from './pages/Stocks/Estoque';
import Cadastro from './pages/Cadastro/cad';
import Fornecedor from './pages/CadForn/cadForn';
import Editar from './pages/Edit/edit';
import ListaForn from './pages/ListaForn/ListaForn';

/*<Route path="/dashboard" component={Dashboard}/>
  <Route path="/new" component={New}/>*/

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/stock" component={Stock}/>
        <Route path="/cad" component={Cadastro}/>
        <Route path="/cadForn" component={Fornecedor}/>
        <Route path="/editProd" component={Editar}/>
        <Route path="/ListaForn" component={ListaForn} />
      </Switch>
    </BrowserRouter>
  );
}