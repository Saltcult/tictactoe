import React from "react";
import ReactDOM, { render } from "react-dom";
import './index.css'

class Kwadrat extends React.Component {
constructor(props) {
super(props);
 }
 render(){
    return(
        <button className="kwadraty" onClick = {() => {
            this.props.onClick();
            }}
            >
            {this.props.value || <div>&nbsp;</div>}
          </button>      
        );
      } 
    }
    class Tablica extends React.Component {
    constructor(props) {
    super(props);
  }
   render() {
     return this.props.kwadraty.map((arrayElement, index) => {
     const strzalkaKwadratFunction = () => this.props.handleKwadratClick(index);
     
     return (
      <div key={index} className="kwadraty">
        <Kwadrat onClick={strzalkaKwadratFunction} value={arrayElement} />
        {(index + 1) % 3 === 0 ? <br /> : <></>}
      </div>
     );
    });
  }
 }
  
 class Gra extends React.Component {
   constructor(props) {
    super(props);
 
    this.state = {
    kwadraty: Array(9).fill(null),
    nastepnySymbol: "O",
    gameWon: false,
  
   };
   this.handleKwadratClick=this.handleKwadratClick.bind(this);
   }

    handleKwadratClick(index) {
    console.log(`User click ${index}`);
    const stateKwadraty = this.state.kwadraty;
     stateKwadraty [index] = this.state.nastepnySymbol;


     let winCondition = this.winCheck(stateKwadraty);
    if (winCondition) {
      // Expected output: Win [0, 1, 2]
      console.log(`Win ${winCondition}`);
      // YOU CAN'T do this this.state.gameWon = true
      this.setState({ gameWon: true });
    }
    const nastepnySymbol = this.state.nastepnySymbol === "O" ? "X" : "O";

   this.setState({ kwadraty : stateKwadraty, nastepnySymbol : nastepnySymbol });

    if (stateKwadraty[index] !== null || this.state.gameWon) {
    return;
    }
   }

    render(){
        return(
        <Tablica
        kwadraty={this.state.kwadraty}
        handleKwadratClick={this.handleKwadratClick} />
      );
    }

   winCheck(kwadraty){
    const winCondition = [
      [0,1,2]
      [3,4,5]
      [6,7,8]
      [0,3,6]
      [1,4,7]
      [2,5,8]
      [0,4,8]
      [2,4,6]
     ];
     for (let e = 0; e <winCondition.length; e++ ) {
     let [a, b, c] = winCondition[e];
     
     if (
       (kwadraty === "X" || kwadraty === "O") &&
       kwadraty[a] === kwadraty[b] &&
       kwadraty[a] === kwadraty[c]
      )
      return winCondition[e]
    }
  }
}
ReactDOM.render(<Gra />, document.getElementById("root"));