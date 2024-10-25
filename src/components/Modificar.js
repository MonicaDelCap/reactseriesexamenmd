import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';
export default class Modificar extends Component {

    cajaselectPersonaje = React.createRef();
    cajaselectSerie = React.createRef();

    state = {
        series: [],
        personajes: [],
        status: false,
        imagenserie: [],
        imagenpersonaje: []
    }

    loadSeries() {
        let request = "api/Series";
        axios.get(Global.urlSeries + request).then(response => this.setState({ series: response.data }));
    }

    loadPersonajes(){
        let request = "api/Personajes";
        axios.get(Global.urlSeries + request).then(response => this.setState({personajes: response.data}));
    }

    loadImagenPersonaje = (e) => {
        e.preventDefault();
        let request = "api/Personajes/" + this.cajaselectPersonaje.current.value;
        axios.get(Global.urlSeries + request).then(response => this.setState({imagenpersonaje: response.data}));
    }

    loadImagenSerie = (e) => {
        e.preventDefault();
        let request = "api/Series/" + this.cajaselectSerie.current.value;
        axios.get(Global.urlSeries + request).then(response => this.setState({imagenserie: response.data}));
    }

    actualizarPersonaje = (e) => {
        e.preventDefault();
        let request = "api/Personajes/" + this.cajaselectPersonaje.current.value + "/" + this.cajaselectSerie.current.value;
        axios.put(Global.urlSeries + request).then(response => this.setState({status:true}))
    }

    componentDidUpdate
    componentDidMount(){
        this.loadSeries();
        this.loadPersonajes();
    }

    render() {
        return (
            <div>
                 {
                    this.state.status &&
                    (<Navigate to={"/personajes/" + this.cajaselectSerie.current.value}/>)
                }
                <main className="container">
                    <h1>Modificar Personaje</h1>
                    <div className="bg-light p-5 rounded">
                        <select ref={this.cajaselectPersonaje} onChange={this.loadImagenPersonaje} className='form-select'>
                            <option disabled selected>Personaje</option>
                            {
                                this.state.personajes.map((per, index)=> {
                                    return(
                                        <option key={index} value={per.idPersonaje}>{per.nombre}</option>
                                    )
                                })
                            }

                        </select>
                        <br/>
                        <select ref={this.cajaselectSerie} onChange={this.loadImagenSerie} className='form-select'>
                        <option disabled selected>Series</option>

                            {
                                this.state.series.map((serie, index) => {
                                    return (
                                        <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                    )
                                })
                            }
                        </select>
                        <br />
                        <button className="btn btn-success" onClick={this.actualizarPersonaje}>Modificar</button>
                        <div className='container-fluid'>
                            {
                                this.state.imagenpersonaje.length != 0 &&
                                (
                                    <img src={this.state.imagenpersonaje.imagen} style={{width:"300px", height:"300px"}}/>
                                )
                            }
                            {
                                this.state.imagenserie.length != 0 &&
                                (
                                    <img src={this.state.imagenserie.imagen} style={{width:"300px", height:"300px"}}/>
                                )
                            }
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
