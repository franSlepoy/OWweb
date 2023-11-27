import { collection, doc, updateDoc } from "firebase/firestore";
import AddGalleryEdit from "./addGalleryEdit/AddGalleryEdit";
import AddSlidesEdit from "./addSlidesEdit/AddSlidesEdit";
import ImagePpalEdit from "./imagePpalEdit/ImagePpalEdit";
import { db } from "../../../../../firebaseConfig/FirebaseConfig";

const EditProject = ({ project, setProject, id }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("valores ", project);
    try {
      let refCollection = collection(db, "projects_test");
      const docRef = doc(refCollection, id);
      await updateDoc(docRef, project);
      console.log("Documento actualizado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>PROYECTO A EDITAR - {project.name}</h2>
      <p>Listado - Agregar proyectos </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Proyecto</label>
          <input
            type="text"
            placeholder="Nombre del proyecto"
            name="name"
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </div>

        <ImagePpalEdit project={project} setProject={setProject} />

        <AddSlidesEdit project={project} setProject={setProject} />

        <AddGalleryEdit project={project} setProject={setProject} />

        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default EditProject;
