import { Box, Button, Typography } from "@mui/material";
import AddGalleryEdit from "./addGalleryEdit/AddGalleryEdit";
import AddSlidesEdit from "./addSlidesEdit/AddSlidesEdit";
import ImagePpalEdit from "./imagePpalEdit/ImagePpalEdit";

const EditProject = ({ project, setProject }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("valores ", project);
  };

  return (
    <Box m={3}>
      <Typography fontSize={"20px"}>PROYECTOS </Typography>
      <Typography>Listado => {project.name} </Typography>

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
            variant="outlined"
            size="small"
            sx={{ width: "45%", mt: 1, p: 0 }}
            type="submit"
          >
            Crear Producto
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default EditProject;
