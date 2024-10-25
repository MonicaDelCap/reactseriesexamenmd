import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class MenuSeries extends Component {

    state = {
        series: []
    }

    loadSeries() {
        let request = "api/Series";
        axios.get(Global.urlSeries + request).then(response => this.setState({ series: response.data }));
    }

    componentDidMount() {
        this.loadSeries();
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src='https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png' style={{width:"80px",height:"50px"}}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/crear">Nuevo Personaje</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/modificar">Modificar Personaje</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Series
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {
                                        this.state.series.length != 0 &&
                                        (this.state.series.map((serie, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink to={"/detalle/" + serie.idSerie} className="dropdown-item">{serie.nombre}</NavLink>
                                                </li>
                                            )
                                        }))
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
