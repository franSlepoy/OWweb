import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useEffect } from "react";
import { useState } from "react";
import {
  db,
  storage,
  uploadFile,
} from "../../../../firebaseConfig/FirebaseConfig";
import imagen_default from "../../../../../public/imagenes/defaults/imagen_default.jfif";
import video_default from "../../../../../public/imagenes/defaults/video_default.png";
import { Box, Button, Divider, Typography } from "@mui/material";

const EditInicio = () => {
  const [data, setData] = useState({});
  const [files, setFiles] = useState({});
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    let refCollection = collection(db, "inicio");
    let refDoc = doc(refCollection, "D8eDUtoTEElGXUAON9dg");
    getDoc(refDoc).then((res) => {
      setData(res.data());
    });
  }, []);

  const handleImageUpload = async (field) => {
    try {
      setLoadingImage(true);
      let url = await uploadFile(files[field]);
      setIsImageUpload(true);
      setData({ ...data, [field]: url });
      setLoadingImage(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let refCollection = collection(db, "inicio");
    let refDoc = doc(refCollection, "D8eDUtoTEElGXUAON9dg");
    await updateDoc(refDoc, data);
  };

  const handleDelete = async (field) => {
    // Obtén la URL de la imagen

    const url = data[field];
    const desertRef = ref(storage, url);
    await deleteObject(desertRef);

    if (field == "image_desktop" || field == "image_mobile") {
      setData({
        ...data,
        [field]: "",
      });
    } else {
      setData({
        ...data,
        [field]: "",
      });
    }

    setIsImageUpload(true);
  };

  console.log(data);

  return (
    <Box p={3} width={"100%"}>
      <Typography sx={{ fontSize: "20px" }}>Estudio</Typography>
      <Typography>Inicio</Typography>

      <Box mt={2}>
        <Typography>Imagen</Typography>
        <Divider />
        <Box display={"flex"}>
          <Box>
            <Box mt={3}>
              <Typography>Escritorio</Typography>
              <Box mt={3}>
                <img
                  src={
                    data?.image_desktop ? data.image_desktop : imagen_default
                  }
                  width={400}
                />
              </Box>

              <Box mt={2} display={"flex"} flexDirection={"column"}>
                <input
                  type="file"
                  onChange={(e) =>
                    setFiles({ ...files, image_desktop: e.target.files[0] })
                  }
                />
                {files.image_desktop && (
                  <button
                    onClick={() => handleImageUpload("image_desktop")}
                    type="button"
                  >
                    Cargar imagen
                  </button>
                )}
                {data.image_desktop && (
                  <Button
                    color="success"
                    variant="outlined"
                    size="small"
                    sx={{ width: "45%", mt: 1, p: 0 }}
                    onClick={() => handleDelete("image_desktop")}
                    type="button"
                  >
                    Eliminar
                  </Button>
                )}
                {loadingImage && <h5>Cargando...</h5>}
              </Box>
            </Box>
          </Box>

          <Box ml={5} mt={3}>
            <Typography>Mobile</Typography>
            <Box mt={3}>
              <img
                src={data?.image_mobile ? data.image_mobile : imagen_default}
                width={400}
              />
            </Box>

            <Box>
              <input
                type="file"
                onChange={(e) =>
                  setFiles({ ...files, image_mobile: e.target.files[0] })
                }
              />
              {files.image_mobile && (
                <button
                  onClick={() => handleImageUpload("image_mobile")}
                  type="button"
                >
                  Cargar imagen
                </button>
              )}
              {data.image_mobile && (
                <Button
                  color="success"
                  variant="outlined"
                  size="small"
                  sx={{ width: "45%", mt: 1, p: 0 }}
                  onClick={() => handleDelete("image_mobile")}
                  type="button"
                >
                  Eliminar
                </Button>
              )}

              {loadingImage && <h5>Cargando...</h5>}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt={3}>
        <Typography>Video</Typography>
        <Divider />

        <Box display={"flex"}>
          <Box mt={3}>
            <Typography>Escritorio</Typography>
            <Box mt={3}>
              <img
                src={data?.video_desktop ? data.video_desktop : video_default}
                width={400}
              />
            </Box>

            <Box mt={2} display={"flex"} flexDirection={"column"}>
              <input
                type="file"
                onChange={(e) =>
                  setFiles({ ...files, video_desktop: e.target.files[0] })
                }
              />
              {files.video_desktop && (
                <button
                  onClick={() => handleImageUpload("video_desktop")}
                  type="button"
                >
                  Cargar video
                </button>
              )}
              {data.video_desktop && (
                <Button
                  color="success"
                  variant="outlined"
                  size="small"
                  sx={{ width: "45%", mt: 1, p: 0 }}
                  onClick={() => handleDelete("video_desktop")}
                  type="button"
                >
                  Eliminar video
                </Button>
              )}

              {loadingImage && <h5>Cargando...</h5>}
            </Box>
          </Box>

          <Box mt={3} ml={5}>
            <Typography>Mobile</Typography>

            <Box mt={3}>
              <img
                src={data?.video_mobile ? data.video_mobile : video_default}
                width={400}
              />
            </Box>

            <Box mt={2}>
              <input
                type="file"
                onChange={(e) =>
                  setFiles({ ...files, video_mobile: e.target.files[0] })
                }
              />
              {files.video_mobile && (
                <button
                  onClick={() => handleImageUpload("video_mobile")}
                  type="button"
                >
                  Cargar video
                </button>
              )}
              {data.video_mobile && (
                <Button
                  color="success"
                  variant="outlined"
                  size="small"
                  sx={{ width: "45%", mt: 1, p: 0 }}
                  onClick={() => handleDelete("video_mobile")}
                  type="button"
                >
                  Eliminar video
                </Button>
              )}

              {loadingImage && <h5>Cargando...</h5>}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt={3}>
        <Button
          sx={{ cursor: "pointer" }}
          color="success"
          size="large"
          variant="outlined"
          onClick={handleSubmit}
          type="submit"
          disabled={!isImageUpload}
        >
          Guardar cambios
        </Button>
      </Box>
    </Box>
  );
};

export default EditInicio;
