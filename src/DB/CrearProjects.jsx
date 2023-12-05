import { Button } from "@mui/material"
import { generarDocumentos } from "./Projects_test"


const CrearProjects = () => {
  return (
    <div>
        
    <h2>Funcion de crear projects</h2>
    <Button onClick={()=>generarDocumentos() }>Crear projects </Button>

    </div>
  )
}

export default CrearProjects