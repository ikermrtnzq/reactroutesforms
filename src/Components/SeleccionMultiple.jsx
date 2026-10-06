import React, {Component} from "react"
export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef();

    state = {
        seleccionados: ""
    }

    mostrarSeleccionados = (event) => {
        event.preventDefault();
        //recuperamos las options
        let options = this.selectMultiple.current.options;
        let data ="";
        for(var opt of options){
            if (opt.selected){
                data = data + opt.value + ", ";
            }
        }
        this.setState({
            seleccionados: data
        })
    }

    render(){
        return(
            <div>
                <h1>Seleccion Multiple</h1>
                <h3 style={{color: "red"}}>{this.state.seleccionados}</h3>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>Seleccione:</label><br></br>
                    <select size="3" multiple ref={this.selectMultiple}>
                        <option>elemento 1</option>
                        <option>elemento 2</option>
                        <option>elemento 3</option>
                        <option>elemento 4</option>
                        <option>elemento 5</option>
                    </select> <br></br>
                    <button>Mostrar Elegidos</button>
                </form>
            </div>
        )
    }
}