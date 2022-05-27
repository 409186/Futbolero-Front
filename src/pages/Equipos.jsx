import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios'

const Equipos = () => {
    const [equipos, setEquipos] = useState([])

    useEffect(() => {
        // axios.get(`${process.env.REACT_APP_SERVER_URL}/perfil/equipos`)
        axios.get(`http://localhost:5005/perfil/equipos`)
        .then(datos => setEquipos(datos.data.teams))
        .catch(error => {console.log("Este es el error =>", error)})
    }, [])

  return (
    <div className='contenedor'>
        {
            equipos.map(equipo => {
                return (
                    <Link key={equipo._id} to={`/detalles/${equipo._id}`}>
                        <Card style={{ width: '28rem' }}>
                        <Card.Img variant="top" src={equipo.imagenLogo} />
                        <Card.Body>
                            <Card.Title className='clean'>{equipo.nombreDelEquipo}</Card.Title>
                            <Card.Text>
                                Lista de jugadores.
                            </Card.Text>
                            <Card.Text>
                                Partidos asignados.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Equipos