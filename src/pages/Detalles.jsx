import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Detalles = () => {
    const {id} = useParams()

    const [detalles, setDetalles] = useState([])

    const [equipos, setEquipos] = useState({})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/perfil/detalles/${id}`)
        // axios.get(`http://localhost:5005/perfil/detalles/${id}`)
        .then( datos => {
            console.log(datos.data)
            setDetalles(datos.data.jugadores)
            setEquipos(datos.data)
        })
        .catch(error => console.log("Este es el error =>", error))
    }, [id])

  return (
    <div>
        <h1>Lista de jugadores de {equipos.nombreDelEquipo}</h1>
        {
            detalles.map(lista => {
                return(
                    <center>
                        <ul key={lista._id}>
                            <li>{lista.nombre}: <b>{lista.posicion}</b></li>
                        </ul>
                    </center>
                )
            })
        }
        <Link to={"/jugadores"}><Button variant="success">Agregar Jugador</Button></Link>
    </div>
  )
}

export default Detalles