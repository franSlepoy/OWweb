import { collection, doc, updateDoc } from "firebase/firestore";
import { Box, Button, Typography } from "@mui/material";
import AddGalleryEdit from "./addGalleryEdit/AddGalleryEdit";
import AddSlidesEdit from "./addSlidesEdit/AddSlidesEdit";
import ImagePpalEdit from "./imagePpalEdit/ImagePpalEdit";
import { db } from "../../../../../firebaseConfig/FirebaseConfig";

const EditProject = ({ project, setProject, id }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("valores ", project);
    try {
      // Elimina la propiedad file de cada objeto en la propiedad gallery
      project.gallery.forEach((item) => {
        delete item.file;
      });
      let refCollection = collection(db, "projects_test");
      const docRef = doc(refCollection, id);

      await updateDoc(docRef, project);
      alert("Proyecto actualizado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m={3}>
      <Typography fontSize={"20px"}>PROYECTOS </Typography>
      <Typography>Listado - {project.name} </Typography>

      <Box mt={5}>
        <form onSubmit={handleSubmit}>
          <Box mb={1}>
            <input
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              value={project.name}
              onChange={(e) => setProject({ ...project, name: e.target.value })}
            />
          </Box>

          <ImagePpalEdit project={project} setProject={setProject} />

          <AddSlidesEdit project={project} setProject={setProject} />

          <AddGalleryEdit project={project} setProject={setProject} />

          <Button
            color="success"
            variant="contained"
            size="small"
            sx={{ width: "45%", mt: 1, p: 0 }}
            type="submit"
          >
            Actualizar Producto
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default EditProject;
