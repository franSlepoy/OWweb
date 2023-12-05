import { Box } from "@mui/system";
import imagenStyles from "./ImgStudio.module.css";

const ImgStudio = ({modulosStudio}) => {

console.log(modulosStudio?.modulo3?.url)

  return (

    <Box sx={{ mt: 5 }}>
      <img src={modulosStudio?.modulo3?.url} className={imagenStyles.imagenStudio} />
    </Box>
  );
};

export default ImgStudio;
