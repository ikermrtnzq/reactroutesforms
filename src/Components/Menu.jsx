import {Component} from "react"
export default class Menu extends Component{
    render (){
        return(
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/cinema">Cinema</a>
                    </li>
                    <li>
                        <a href="/musica">Musica</a>
                    </li>
                    <li>
                        <a href="/formSimple">Form Simple</a>
                    </li>
                    <li>
                        <a href="/collatz">Collatz</a>
                    </li>
                    <li>
                        <a href="/TablaMultiplicar">TablaMultiplicar</a>
                    </li>
                    <li>
                        <a href="/TablaMultiplicarV2">TablaMultiplicar2</a>
                    </li>
                    <li>
                        <a href="/SeleccionMultiple">Seleccion Multiple</a>
                    </li>
                </ul>
            </div>
        )
    }

}