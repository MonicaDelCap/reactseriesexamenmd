import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuSeries from './MenuSeries'
import Detalles from './Detalles';
import Personajes from './Personajes';
import Crear from './Crear';
import Modificar from './Modificar';
import Home from './Home';

export default class Router extends Component {
   
    render() {
        function ShowDetalles() {
            let {id} = useParams();
            return(<Detalles id={id}/>)
        }
        function ShowPersonajes() {
            let {id} = useParams();
            return(<Personajes id={id}/>)
        }
        return (
            <BrowserRouter>
                <MenuSeries />
                <Routes>
                    <Route path='/detalle/:id' element={<ShowDetalles/>}/>
                    <Route path='/personajes/:id' element={<ShowPersonajes/>}/>
                    <Route path='/crear' element={<Crear/>}/>
                    <Route path='/modificar' element={<Modificar/>}/>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
