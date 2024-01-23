import { Box } from "@mui/system";
import imagenStyles from "./ImgStudio.module.css";
import { Hidden } from "@mui/material";

const ImgStudio = ({ modulosStudio }) => {
  console.log(modulosStudio?.modulo3?.url);

  return (
    <>
    <Hidden mdDown>
      <Box sx={{ mt: 5 }}>
        <img
          src={modulosStudio?.modulo3?.url}
          className={imagenStyles.imagenStudio}
        />
      </Box>
    </Hidden>
    <Hidden mdUp>
    <Box sx={{ mt: 2 }}>
        <img
          width={"100%"}
          src={modulosStudio?.modulo3?.url}
         />
      </Box>
    </Hidden>
    </>
    
  );
};

export default ImgStudio;
