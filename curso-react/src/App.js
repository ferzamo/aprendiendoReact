import React from 'react';
import './App.css';
import InputComp from './InputComp';
import ButtonComp from './ButtonComp';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { texto : "El texto"};



  
  }
  

  childBorra = () => this.setState({ texto: ' ' });

  



  render(){
    return(

      <div>
        <h1>{this.state.texto}</h1>
        <InputComp val={this.state.texto} onCambio={(val) => this.setState({ texto: val })}></InputComp>
        <ButtonComp action={this.childBorra}></ButtonComp>
      </div>
    );

  }






}

export default App;
