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
import NavBar2 from "../../commond/navBar/NavBar2";
import "./descripcion_styles.css";
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

  const groupElements = (elements) => {
    const result = [];
    let currentGroup = [];

    elements.forEach((element) => {
      if (element.trim() === "") {
        if (currentGroup.length > 0) {
          result.push(currentGroup);
          currentGroup = [];
        }
      } else {
        currentGroup.push(element);
      }
    });

    // Agrega el último grupo si no está vacío
    if (currentGroup.length > 0) {
      result.push(currentGroup);
    }

    return result;
  };

  const renderDivs = (array) => {
    return (
      <>
        {array.map((item, index) => {
          if (typeof item === "string") {
            if (item.startsWith("# ")) {
              return <h1 key={index}>{item.slice(2)}</h1>;
            } else if (item.startsWith("## ")) {
              return <h2 key={index}>{item.slice(3)}</h2>;
            } else {
              return <p key={index}>{item}</p>;
            }
          } else {
            // Manejar el caso en que item no es una cadena
            return <p key={index}>{String(item)}</p>;
          }
        })}
      </>
    );
  };

  const splitText = (text) => {
    // Elimina espacios en blanco al principio y al final y luego divide por "#"
    const elements = text.split("\n");
    const agrupamiento = groupElements(elements);
    console.log(agrupamiento); // Agrega esta línea
    return agrupamiento.map((innerArray, index) => (
      <div
        key={index}
        style={{ margin: 2, padding: 2 }}
      >
        {renderDivs(innerArray)}
      </div>
    ));
  };

  return (
    <>
      <NavBar2 />
      <Box
        mt={3}
        ml={3}
        mb={3}
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
          width: "80%",
          m: "auto",
          mb: 3,
        }}
      >
        <Carousel
          autoPlay={false}
          indicators={true}
          animation="fade"
          timeout={1}
          cycleNavigation={false}
          sx={{
            width: "85%",
            m: "auto",
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ".MuiButtonBase-root": {
              top: "70% !important",
            },
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
                      </div>
                    );
                  }
                } else if (!item.url && item.trim() !== "") {
                  // Si no es una imagen, renderiza el texto
                  acc.elements.push(
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      {/*  {applyStyles(item)} */}
                      {splitText(item)}
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

        {/*  <Box>
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
        </Box> */}
      </Box>
    </>
  );
};

export default Descripcion;
