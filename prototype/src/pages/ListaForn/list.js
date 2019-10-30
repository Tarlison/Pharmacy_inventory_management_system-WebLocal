import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './ListaForn.css';
import Axios from 'axios';


let componentsObjects = [];

class TabelaForn extends Component{

  
  constructor(props){
    super(props);

    this.state = {
      objects: null,
      components: []
    }

    this.renderTableData = this.renderTableData.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  
    
  }

  componentDidMount(){

    componentsObjects = [];

    this.tableHandler().then((result) => {
      this.setState({components: result});
    });
  }

  handleReturn () {
    const {history} = this.props;
    
   
    history.push('/home');
  }

  async renderTableHeader(response){

      alert(JSON.stringify(response));

      let header = Object.keys(response.data[0])
      return header.map((key, index) =>{
        return <th key={index}>{key.toUpperCase()}</th>
      });

  
  }

  async tableHandler(){

     return await Axios.get('http://localhost:3333/fornecedores').then(response => {
      console.log("stock_js:"+JSON.stringify(response.data));
   
      return(
        <tbody>
         {this.renderTableData(response.data)}
        </tbody>
      );

    });

  
  }

  renderTableData(response){
    
    let jsonObj = JSON.parse(JSON.stringify(response));

    console.log(jsonObj.length);

    for (let i = 0 ; i<jsonObj.length;i++){
      componentsObjects.push(
        <tr key={jsonObj[i].id}>
          <td>{jsonObj[i].cnpj}</td>
          <td>{jsonObj[i].nome}</td>
        </tr>
      );
    }

    return componentsObjects;
  }

  render(){
  const { history } = this.props;

    return(
      <div className="listaForn">
        <div className="container-forn">
          <table id="listaForn">
          <tr>
            <th>CNPJ</th>
            <th>Razão Social</th>
          </tr>
            {this.state.components}
          </table>
        </div>
        <button onClick={this.handleReturn} className="returnBF">Voltar</button>
      </div>
    )
  }

}

export default withRouter(TabelaForn);
