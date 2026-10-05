import {Component} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Musica from "./Musica"
import Cinema from "./Cinema"

export default class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/musica" element={<Musica/>}></Route>
                    <Route path="/cinema" element={<Cinema/>}></Route>

                </Routes>
            
            
            </BrowserRouter>
        )
    }
}