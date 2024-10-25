import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Detalles extends Component {

    state = {
        serie: []
    }

    loadDetalle (){
        let request = "api/Series/" + this.props.id;
        axios.get(Global.urlSeries + request).then(response => this.setState({serie: response.data}))
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.id != this.props.id){
            this.loadDetalle();
        }
    }

    componentDidMount(){
        this.loadDetalle();
    }
    render() {
        return (
            <div>
                <h1>Detalles</h1>
                {
                    this.state.serie.length != 0 &&
                    (
                        <div className='card'>
                            <img src={this.state.serie.imagen} style={{width:"300px", height:"300px"}}/>
                            <h3>{this.state.serie.nombre}</h3>
                            <p>IMDB: {this.state.serie.puntuacion}</p>
                            <NavLink to={"/personajes/" + this.state.serie.idSerie} className='btn btn-success'>Personajes</NavLink>
                        </div>
                    )
                }
            </div>
        )
    }
}
