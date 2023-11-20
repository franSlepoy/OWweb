import { addDoc, collection } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export const generarDocumentos = () => {
  let refCollection = collection(db, "projects");



  const projects = [
    {
        name: "OW + CUMULO - 2023", 
        imagenDeListado: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/Grilla%20ordonez%20wenzke%20cumulo.jpg?alt=media&token=ffcc947b-d74e-49e5-8711-c47db11be670&_gl=1*1n3z1i1*_ga*MTY3NzI5MDE1OC4xNjg4NTgxNzg2*_ga_CW55HF8NVT*MTY5OTI3NzI1OS44MC4xLjE2OTkyNzg5NzAuMTUuMC4w" , 
        fichaSlide1_es: [{ ubicacion: "VILLA URQUIZA, BUENOS AIRES" , autors: ["Arch. Florencia Ordoñez", "  Arch. Nik Wenzke", "Gustavo Losa"]
         
            
            
          
            
            
              COLABORADORES  
            Charlotte Bovy
            
             
            MOBILIARIO
            
            CÚMULO
            
             
            ILUMINACIÓN
            
            HUUP
            
             
            FOTOS
            
            Pedro Yáñez + Felix Niikado
            

        }]
    }
  ]
  
  
  projects.forEach((e) => addDoc(refCollection, e));
  
}