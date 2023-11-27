import { Box, Typography } from "@mui/material";

const AddSlidesEdit = ({ project, setProject }) => {
  return (
    <Box mt={3}>
      <Box display={"flex"} width={"100%"}>
        <Box width={"47%"}>
          <h5>Recuerda que: puedes usar # para títulos y ## para subtítulos</h5>
          <Typography textAlign={"center"}>Ficha Slide 1 - Es</Typography>
          <Box width={"100%"}>
            <textarea
              style={{ width: "100%" }}
              id=""
              cols="30"
              rows="10"
              name={project?.slides?.slides1_es}
              value={project?.slides?.slides1_es}
              onChange={(e) =>
                setProject({
                  ...project,
                  slides: {
                    ...project.slides,
                    slides1_es: e.target.value,
                  },
                })
              }
            ></textarea>
          </Box>
        </Box>

        <Box width={"47%"} ml={"3%"}>
          <Typography textAlign={"center"}>Ficha Slide 1 - En</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={project?.slides?.slides1_en}
            value={project?.slides?.slides1_en}
            onChange={(e) =>
              setProject({
                ...project,
                slides: {
                  ...project.slides,
                  slides1_en: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>
      </Box>

      <Box display={"flex"} mt={3}>
        <Box width={"47%"}>
          <Typography textAlign={"center"} mt={3}>
            Ficha Slide 2 - Es
          </Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={project?.slides?.slides2_es}
            value={project?.slides?.slides2_es}
            onChange={(e) =>
              setProject({
                ...project,
                slides: {
                  ...project.slides,
                  slides2_es: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>

        <Box width={"47%"} ml={"3%"}>
          <Typography textAlign={"center"} mt={3}>
            Ficha Slide 2 - En
          </Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={project?.slides?.slides2_en}
            value={project?.slides?.slides2_en}
            onChange={(e) =>
              setProject({
                ...project,
                slides: {
                  ...project.slides,
                  slides2_en: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>
      </Box>

      <Box display={"flex"} mt={3}>
        <Box width={"47%"}>
          <Typography textAlign={"center"}>Memorias - Es</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={project?.memories?.memorie_es}
            value={project?.memories?.memorie_es}
            onChange={(e) =>
              setProject({
                ...project,
                memories: {
                  ...project.memories,
                  memorie_es: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>
        <Box width={"47%"} ml={"3%"}>
          <Typography textAlign={"center"}>Memorias - En</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={project?.memories?.memorie_en}
            value={project?.memories?.memorie_en}
            onChange={(e) =>
              setProject({
                ...project,
                memories: {
                  ...project.memories,
                  memorie_en: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>
      </Box>
    </Box>
  );
};

export default AddSlidesEdit;
