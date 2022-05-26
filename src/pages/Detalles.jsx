import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detalles = () => {
    const {id} = useParams()

    const [detalles, setDetalles] = useState([])

    const [equipos, setEquipos] = useState({})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/perfil/detalles/${id}`)
        .then( datos => {
            console.log(datos.data)
            setDetalles(datos.data.jugadores)
            setEquipos(datos.data)
        })
        .catch()
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
    </div>
  )
}

export default Detalles