import React, {Component} from "react"
export default class FormSimple extends Component{

    cajaNombre = React.createRef();
    recibirInfo =(event) => {
        event.preventDefault();
        console.log("enviado: " + this.cajaNombre.current.value)
    }

    render(){
        return(
            <div>  
                <h1>Formulario Simple</h1>
                <form onSubmit={this.recibirInfo}>
                    <label>Nombre:</label>
                    <input type="text" ref={this.cajaNombre}></input>
                    <button>Enviar info</button>
                </form>
            </div>
        )
    }
}