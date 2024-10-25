import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export default class Personajes extends Component {

    state = {
        personajes: []
    }

    loadPersonajes() {
        let request = "api/Series/PersonajesSerie/" + this.props.id;
        axios.get(Global.urlSeries + request).then(response => this.setState({ personajes: response.data }))
    }

    componentDidMount() {
        this.loadPersonajes();
    }
    render() {
        return (
            <div className='container-fluid mt-3'>
                <h1>Personajes de {this.props.id}</h1>
                <NavLink to={"/detalle/" + this.props.id} className='btn btn-danger'>Volver</NavLink>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Personaje</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.personajes.length != 0 &&
                            (this.state.personajes.map((per, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{per.nombre}</td>
                                        <td><img src={per.imagen} style={{width:"300px", height:"300px"}}/></td>

                                    </tr>
                                )
                            }))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
