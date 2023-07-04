import "./App.css";
import Image from "./Image";
import staringCat from "./staringCat.jpg";
import React from "react";

class App extends React.Component {

  // buttom1 = () => console.log('botao 1');
  buttom1 = () => console.log('botao 1');
  buttom2 = () => console.log('botao 2');
  buttom3 = () => console.log('botao 3');

  render() {
    return (
      <div>
        <Image source={staringCat} alternativeText="Cute cat staring" />
        <button onClick={ this.buttom1 }>Botão 1</button>
        <button onClick={ this.buttom2 }>Botão 2</button>
        <button onClick={ this.buttom3 }>Botão 3</button>
      </div>
    )
  }
}

export default App;
