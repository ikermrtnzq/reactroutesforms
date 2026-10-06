import React, {Component} from "react"
import './TablaMultiplicar.css' 
export default class TablaMultiplicar extends Component {
    
    cajaNum= React.createRef();
    state={
        tabla :[]
    }
    aux = []
    recibirNum = (event) => {
        event.preventDefault();
        let numero = parseInt(this.cajaNum.current.value)
        let numero2 = 0;
        let operacion = "";
        let resultado = 0;
        let dato ={}
        for(let i = 0; i<=10; i++){
             operacion= numero+"*"+i;
             resultado = numero*i;
             dato = {
                operacion : operacion,
                resultado: resultado
            }
            numero2 = numero*i;
            this.aux.push(dato);

        }
        this.setState({
            tabla: this.aux
        })
    }
    
    render() {
        return(
            <div>
                <h1>Tabla de multiplicar</h1>
                <form onSubmit={this.recibirNum}>
                    <label>Indique el numero a mostrar:</label>
                    <input type="number" ref={this.cajaNum}></input>
                    <button>enviar</button>

                <table>
                    <tr>
                        <th>OPERACION</th>
                        <th>RESULTADO</th>

                    </tr>
                    {
                        this.state.tabla.map((number, index) => {
                            return(
                                <tr>
                                    <td>{number.operacion}</td>
                                    <td>{number.resultado}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                    
                </form>
            </div>
        )
    }
}