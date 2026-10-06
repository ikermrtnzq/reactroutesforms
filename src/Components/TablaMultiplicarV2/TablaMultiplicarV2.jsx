import React, {Component} from "react"
import './TablaMultiplicarV2.css' 
export default class TablaMultiplicarV2 extends Component {
    
    selectNum= React.createRef();
    state={
        tabla :[],
        numeros : []
    }
    
    recibirNum = (event) => {
        event.preventDefault();
        let aux = []
        let numero = parseInt(this.selectNum.current.value)
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
           aux.push(dato);

        }
        this.setState({
            tabla: aux
        })
    }

    generarNumeros = () => {
        let aux = [];
        for(var i = 1; i <=5;i++ ){
            let aleatorio = parseInt(Math.random()*50) +1;
            aux.push(aleatorio)
        }
        this.setState({
            numeros: aux
        })

    }
    
    render() {
        return(
            <div>
                <h1>Tabla de multiplicar</h1>
                <button onClick={this.generarNumeros}>generar Numeros</button>

                <form onSubmit={this.recibirNum}>
                    <label>Indique el numero a mostrar:</label>
                    <select ref={this.selectNum}>
                        {
                            this.state.numeros.map((num, index) =>{
                                return(<option>{num}</option>)
                            })
                        }
                    </select>
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