import { Box, Typography } from "@mui/material";
import imagen_default from "../../../../../../public/imagenes/defaults/imagen_default.jfif";

const ImagePpal = ({
  formData,
  setFile,
  handleImageUpload,
  file,
  loadingImage,
  isImageUpload,
}) => {
  return (
    <Box>
      <Typography mt={3} mb={1}>
        Imagen del Listado
      </Typography>
      <img
        src={formData.image_ppal ? formData.image_ppal : imagen_default}
        alt=""
        width={400}
        
      />
      <Box mt={1}>
        <input
          type="file"
          name="image_ppal"
          onChange={(e) => setFile(e.target.files[0])} //subir la url primero a storage
        />
        {file && (
          <button type="button" onClick={() => handleImageUpload(file)}>
            Cargar imagen!
          </button>
        )}
        {loadingImage && <p>Cargando imagen...</p>}
        {isImageUpload && <p>¡Imagen subida!</p>}
      </Box>

      {/* REVISAR */}
    </Box>
  );
};

export default ImagePpal;
