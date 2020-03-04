import React from 'react';
import './App.css';
import InputComp from './InputComp';
import ButtonComp from './ButtonComp';
import axios from "axios";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { texto : "El texto"};

  }
  

  childBorra = () => this.setState({ texto: ' ' });


  async componentDidMount(){
    const response = await axios.get('http://www.mocky.io/v2/5e5fbd99310000aaf8afdeed')
   
    this.setState({response: response.data})
  }


  render(){
    return(

      <div>
        <h1>{this.state.texto}</h1>
        <InputComp val={this.state.texto} onCambio={(val) => this.setState({ texto: val })}></InputComp>
        <ButtonComp action={this.childBorra}></ButtonComp>
        <p>{this.state.response && this.state.response.id}</p>
      </div>
    );

  }


}

export default App;
