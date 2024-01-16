import { useEffect, useState } from "react";
import { db, uploadFile } from "../../../../firebaseConfig/FirebaseConfig";
import AddGallery3 from "./galleryImages/AddGallery3";
import AddSlides from "./fichasSlides/AddSlides";
import ImagePpal from "./imagePpal/ImagePpal";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Box, Button, Input, Typography } from "@mui/material";

const AddProjectsContainer = () => {
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    (async () => {
      let refCollection = collection(db, "projects_test");
      let res = await getDocs(refCollection);

      console.log(res._snapshot.docChanges.length);
      setQuantity(res._snapshot.docChanges.length);
    })();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    image_ppal: "",
    slides: {
      slides1_en: "",
      slides1_es: "",
      slides2_en: "",
      slides2_es: "",
    },
    memories: { memorie_en: "", memorie_es: "" },
    gallery: [],
    visible: true,
    order: quantity + 1,
  });
  const [file, setFile] = useState(null);
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const handleImageUpload = async (file) => {
    try {
      setLoadingImage(true);
      let url = await uploadFile(file);
      setIsImageUpload(true);
      setFormData((prevData) => ({
        ...prevData,
        image_ppal: url,
      }));
      setLoadingImage(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Valores del formulario a enviar: ", formData);

    const collectionRef = collection(db, "projects_test");

    try {
      let res = await addDoc(collectionRef, formData);
      console.log("respuesta exitosa de creacion de producto: ", res);
      alert("Producto creado !! ");

      //opcional: mostrar mensaje de exito
    } catch (error) {
      console.log(error);
    }
  };

  console.log("formData addprojec: ", formData);

  return (
    <Box
      m={3}
      width={"100%"}
    >
      <Typography fontSize={"20px"}>PROYECTOS</Typography>
      <Typography>Listado - Agregar proyectos </Typography>
      <form onSubmit={handleSubmit}>
        <Box mt={2}>
          <Typography>Proyecto</Typography>
          <Box width={"100%"}>
            <Input
              fullWidth
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Box>
        </Box>
        <Box>
          <ImagePpal
            formData={formData}
            setFile={setFile}
            file={file}
            handleImageUpload={handleImageUpload}
            loadingImage={loadingImage}
            isImageUpload={isImageUpload}
          />
        </Box>

        <AddSlides
          setFormData={setFormData}
          formData={formData}
        />

        <AddGallery3
          setFormData={setFormData}
          formData={formData}
        />

        <br />
        <br />
        <hr />
        <br />
        <br />
        <Button
          color="success"
          size="small"
          variant="contained"
          type="submit"
        >
          Crear Proyecto
        </Button>
      </form>
    </Box>
  );
};

export default AddProjectsContainer;
