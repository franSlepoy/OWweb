import { Box, Card, Typography } from "@mui/material";
import ImgCard from "../../commond/imgCard/ImgCard";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig/FirebaseConfig";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Carousel from "react-material-ui-carousel";

const Descripcion = () => {
  const { id } = useParams();
  const { lenguage } = useContext(AuthContext);
  const [project, setProject] = useState(null);
  useEffect(() => {
    let refCollection = collection(db, "projects_test");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => {
      setProject(res.data());
    });
  }, [id]);

  let combinedData;
  if (project) {
    const filteredSlides = Object.entries(project.slides)
      .filter(([key]) => key.endsWith(`_${lenguage}`))
      .map(([_, value]) => value);

    const filteredMemories = Object.entries(project.memories)
      .filter(([key]) => key.endsWith(`_${lenguage}`))
      .map(([_, value]) => value);

    combinedData = [...project.gallery, ...filteredSlides, ...filteredMemories];
  }
  console.log("el id es: ", project);

  return (
    <>
      <Box
        mt={6}
        ml={6}
        mb={6}
      >
        <Link to="/">
          <Typography
            sx={{
              fontSize: "16px",
              color: "#000",
              underline: "none",
              fontFamily: "Pragmatica",
              textDecoration: "none",
            }}
          >
            VOLVER
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          width: "98%",
          m: "auto",
          mb: 3,
        }}
      >
        {/* <Carousel
          indicators={true}
          animation="fade"
          autoPlay={false}
          timeout={1}
          sx={{
            width: "95%",
            m: "auto",
            border: "solid red",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Carousel> */}
        {/*   {combinedData?.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.url ? (
                <img
                  src={item.url} // Usa item.url para las imágenes de la galería
                  width={"80%"}
                  style={{ height: "50%" }}
                />
              ) : (
                <p>{item}</p> // Si no es una imagen, renderiza el texto
              )}
              <p>{item.order}</p>
            </div>
          ))} */}

        <Carousel
          indicators={true}
          animation="fade"
          timeout={1}
          sx={{
            width: "95%",
            m: "auto",
            border: "solid red",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            combinedData?.reduce(
              (acc, item, i) => {
                if (item.url && !acc.skipNext) {
                  if (item.double) {
                    // Si la imagen tiene la propiedad "double" en true
                    let nextItem = combinedData[i + 1];
                    acc.skipNext = true; // Saltar la siguiente imagen
                    acc.elements.push(
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={item.url}
                          width={"40%"}
                          style={{ height: "50%" }}
                        />
                        {nextItem && nextItem.url && (
                          <img
                            src={nextItem.url}
                            width={"40%"}
                            style={{ height: "50%" }}
                          />
                        )}
                        <p>{item.order}</p>
                      </div>
                    );
                  } else {
                    // Si la imagen no tiene la propiedad "double" en true
                    acc.elements.push(
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={item.url}
                          width={"80%"}
                          style={{ height: "50%" }}
                        />
                        <p>{item.order}</p>
                      </div>
                    );
                  }
                } else if (!item.url) {
                  // Si no es una imagen, renderiza el texto
                  acc.elements.push(
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p>{item}</p>
                      <p>{item.order}</p>
                    </div>
                  );
                } else if (acc.skipNext) {
                  // Si se debe saltar la imagen actual
                  acc.skipNext = false; // Restablecer para la próxima imagen
                }
                return acc;
              },
              { elements: [], skipNext: false }
            ).elements
          }
        </Carousel>

        <Box>
          <Typography>{project?.name}</Typography>
          <Card
            sx={{
              width: "80%",
              objectFit: "cover",
              border: "solid green",
              display: "flex",
            }}
          >
            <ImgCard
              imagen={project?.image_ppal}
              width={200}
            />
            <p>Imagenes secun</p>
            <br />
            <hr />
            <br />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {project?.gallery.map((imagen, i) => {
                return (
                  <div
                    key={i}
                    style={{}}
                  >
                    <p>{imagen.order}</p>
                    <img
                      src={imagen.url}
                      width={150}
                    />
                    {imagen.isNew ? <p>Nuevo</p> : <p>Viejo</p>}
                  </div>
                );
              })}
              <Box>
                <p>Aca van las memories: </p>
                <hr />
                <br />
                {lenguage === "es" ? (
                  <Typography>{project?.memories?.memorie_es}</Typography>
                ) : (
                  <Typography>{project?.memories?.memorie_en}</Typography>
                )}
              </Box>
              <Box>
                <p>Aca van las slides: </p>
                <hr />
                <br />
                {lenguage === "es" ? (
                  <Typography>{project?.slides?.slides1_es}</Typography>
                ) : (
                  <Typography>{project?.slides?.slides1_en}</Typography>
                )}
                {lenguage === "es" ? (
                  <Typography>{project?.slides?.slides2_es}</Typography>
                ) : (
                  <Typography>{project?.slides?.slides2_en}</Typography>
                )}
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Descripcion;
