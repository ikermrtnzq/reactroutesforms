import {Component} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Musica from "./Musica"
import Cinema from "./Cinema"
import FormSimple from "./FormSimple"
import Collatz from "./Collatz"
import TablaMultiplicar from "./TablaMultiplicar/TablaMultiplicar"
import TablaMultiplicarV2 from "./TablaMultiplicarV2/TablaMultiplicarV2"
import SeleccionMultiple from "./SeleccionMultiple"


export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/musica" element={<Musica/>}></Route>
                    <Route path="/cinema" element={<Cinema/>}></Route>
                    <Route path="/formSimple" element={<FormSimple/>}></Route>
                    <Route path="/collatz" element={<Collatz/>}></Route>
                    <Route path="/TablaMultiplicar" element={<TablaMultiplicar/>}></Route>
                    <Route path="/TablaMultiplicarV2" element={<TablaMultiplicarV2/>}></Route>
                    <Route path="/SeleccionMultiple" element={<SeleccionMultiple/>}></Route>

                </Routes>
            
            
            </BrowserRouter>
        )
    }
}