import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate, NavLink } from 'react-router-dom';

export default class Crear extends Component {

    cajaselect = React.createRef();
    cajaNombre = React.createRef();
    cajaImagen = React.createRef();

    state = {
        series: [],
        status: false
    }

    loadSeries() {
        let request = "api/Series";
        axios.get(Global.urlSeries + request).then(response => this.setState({ series: response.data }));
    }

    crearPersonaje = (e) => {
        e.preventDefault();
        let request = "api/Personajes";

        let newPersonaje = {
            idPersonaje: 1,
            nombre: this.cajaNombre.current.value,
            imagen: this.cajaImagen.current.value,
            idSerie: parseInt(this.cajaselect.current.value)
        }
        
        axios.post(Global.urlSeries + request, newPersonaje).then(response => this.setState({status:true}))
        
    }
    componentDidMount(){
        this.loadSeries();
    }

    render() {
        return (
            <div>
                {
                    this.state.status &&
                    (<Navigate to={"/personajes/" + this.cajaselect.current.value}/>)
                }
                <main className="container">
                    <h1>Crear Personaje</h1>
                    <div className="bg-light p-5 rounded">
                        <label>Nombre</label>
                        <input className="form-control" type="text" ref={this.cajaNombre} />
                        <label>Imagen</label>
                        <input className="form-control" type="text" ref={this.cajaImagen}/>
                        <br/>
                        <select ref={this.cajaselect} className='form-select'>
                            {
                                this.state.series.map((serie, index) => {
                                    return(
                                        <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                    )
                                })
                            }
                        </select>
                        <br/>
                        <button className="btn btn-success" onClick={this.crearPersonaje}>Crear</button>
                    </div>
                </main>
            </div>
        )
    }
}
