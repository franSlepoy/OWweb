import { Box } from "@mui/system";
import imagen_studio from "../../../../../public/imagenes/studio/imagen_final.jpg";
import imagenStyles from "./ImgStudio.module.css";
const ImgStudio = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <img src={imagen_studio} className={imagenStyles.imagenStudio} />
    </Box>
  );
};

export default ImgStudio;
