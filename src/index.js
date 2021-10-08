import React from "react";
import ReactDOM from "react-dom";

class Kwadrat extends React.Component {
constructor(props) {
super(props);
 }
render(){
    return(
        <button onClick = {() => {
            this.props.onClick();
            }}
        >
        </button>

        

      
    );
}


}
class Tablica extends React.Component {
constructor(props) {
super(props);
 }
 render() {
 return(
     this.props.kwadraty.map((arrayElement, index)) => {
     
    }
    );
    return(
    <Kwadrat
    key={index}
    />
    );


}
}
class Gra extends React.Component {
constructor(props) {
    super(props);
 }
this.state = {
    kwadraty: Array(9).fill(null),
    nastepnySymbol: "X",
 };
this.handleKwadratClick=this.handleKwadratClick.bind(this);
}
handleKwadratClick(index) {
    console.log(`User click ${index}`);
    const stateKwadraty = this.state.kwadraty;
     stateKwadraty [index] = this.state.nastepnySymbol;
    const nastepnySymbol = this.state.nastepnySymbol === "O" ? "X" : "O";

   this.setState({ kwadraty : stateKwadraty, nastepnySymbol : nastepnySymbol });






}