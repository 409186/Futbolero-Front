import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Partidos = () => {
  const [partidos, setPartidos] = useState([])

    useEffect(() => {
        // axios.get(`${process.env.REACT_APP_SERVER_URL}/perfil/equipos`)
        axios.get(`http://localhost:5005/partidos`)
        .then(datos => setPartidos(datos.data.matches))
        .catch(error => {console.log("Este es el error =>", error)})
    }, [])


  return (
    <div className='contenedor'>
        {
           partidos.map(partido => {
                return (
                    <div>
                        Partido
                        {
                            partido.map((equipo) => <p>{equipo.nombreDelEquipo}</p>)
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Partidos