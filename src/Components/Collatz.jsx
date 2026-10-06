import React, {Component} from "react"
export default class Collatz extends Component {
    cajaNum = React.createRef();

    recibirNumero = (event)  => {
        event.preventDefault();
        let numero = parseInt(this.cajaNum.current.value);
        let aux=[];
        while(numero != 1){
            if(numero%2 == 0){
                numero = numero/2;
            }else{
                numero= (numero*3)+1;
            }
            aux.push(numero);
        }
        this.setState({
            numeros: aux
        })
        
    }
    state= {
        numeros: []
    }
    render() {
        return(
            <div>
                <h1>Collatz</h1>
                <form onSubmit={this.recibirNumero}>
                    <label>Introduzca un numero</label>
                    <input type="numbre" ref={this.cajaNum} ></input>
                    <button>enviar</button>
                </form>
                <ul>
                    {this.state.numeros.map((number, index) => {
                        return(
                            <li key={index}>{number}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}