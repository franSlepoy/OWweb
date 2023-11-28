import { Box, Typography } from "@mui/material";

const AddSlides = ({ setFormData, formData }) => {
  return (
    <Box mt={3}>
      <Typography color={"ActiveBorder"}>Recuerda que puedes usar # para títulos y ## para subtítulos</Typography>
      <Box mt={2} display={"flex"} width={"100%"}>
      
        <Box width={"49%"}>
          

          <Typography textAlign={"center"}>Ficha Slide 1 - Es</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={formData.slides.slides1_es}
            value={formData.slides.slides1_es}
            onChange={(e) =>
              setFormData({
                ...formData,
                slides: {
                  ...formData.slides,
                  slides1_es: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>

        <Box width={"49%"} ml={"2%"}>
          <Typography textAlign={"center"}>Ficha Slide 1 - En</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={formData.slides.slides1_en}
            value={formData.slides.slides1_en}
            onChange={(e) =>
              setFormData({
                ...formData,
                slides: {
                  ...formData.slides,
                  slides1_en: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>
      </Box>

      <Box mt={2} display={"flex"} width={"100%"}>
        <Box width={"49%"}>
          <Typography textAlign={"center"}>Ficha Slide 2 - Es</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={formData.slides.slides2_es}
            value={formData.slides.slides2_es}
            onChange={(e) =>
              setFormData({
                ...formData,
                slides: {
                  ...formData.slides,
                  slides2_es: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>

        <Box width={"49%"} ml={"2%"}>
          <Typography textAlign={"center"}>Ficha Slide 2 - En</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={formData.slides.slides2_en}
            value={formData.slides.slides2_en}
            onChange={(e) =>
              setFormData({
                ...formData,
                slides: {
                  ...formData.slides,
                  slides2_en: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>
      </Box>

      <Box mt={2} display={"flex"} width={"100%"}>
        <Box width={"49%"}>
          <Typography textAlign={"center"}>Memorias - Es</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={formData.memories.memorie_es}
            value={formData.memories.memorie_es}
            onChange={(e) =>
              setFormData({
                ...formData,
                memories: {
                  ...formData.memories,
                  memorie_es: e.target.value,
                },
              })
            }
          ></textarea>
        </Box>
        <Box width={"49%"} ml={"2%"}>
          <Typography textAlign={"center"}>Memorias - En</Typography>
          <textarea
            style={{ width: "100%" }}
            id=""
            cols="30"
            rows="10"
            name={formData.memories.memorie_en}
            value={formData.memories.memorie_en}
            onChange={(e) =>
              setFormData({
                ...formData,
                memories: {
                  ...formData.memories,
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

export default AddSlides;
