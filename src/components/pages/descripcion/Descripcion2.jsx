import { Box, Hidden, ImageList, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig/FirebaseConfig";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Carousel from "react-material-ui-carousel";

import "./descripcion_styles.css";
import HeaderDescription from "./HeaderDescription";
import ESDescription from "./ESDescription";
import ENDescription from "./ENDescription";
import ProjectNavigation from "./ProjectNavigation";
const Descripcion2 = () => {
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
    return agrupamiento.map((innerArray, index) => (
      <div key={index} style={{ margin: 4, padding: 4 }}>
        {renderDivs(innerArray)}
      </div>
    ));
  };

  return (
    <>
      <Hidden mdDown>
        <div className="body-container">
          <div className="header">
            {/* <NavBar2 /> */}
            <HeaderDescription />
          </div>
          <div className="left-side">
            <ESDescription />
          </div>
          <div className="main-content">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Carousel
                autoPlay={false}
                indicators={true}
                animation="fade"
                timeout={1}
                cycleNavigation={false}
                sx={{
                  width: "100%",

                  borderLeft: "solid black 1px",
                  borderRight: "solid black 1px",
                  m: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",

                  ".MuiButtonBase-root": {
                    top: "47% !important",
                    background: "transparent",
                   
                  },
                  ".transparent-button": {
                    background: "transparent !important",
                    color: "black !important",
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

                                gap: 10,
                              }}
                            >
                              <img src={item.url} width={"27%"} />
                              {nextItem && nextItem.url && (
                                <img src={nextItem.url} width={"27%"} />
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
                                height: "76vh",
                              }}
                            >
                              <img
                                src={item.url}
                                style={{
                                  objectFit: "cover",
                                  /*  width: "100%",
                                   */
                                  width: "auto", // Ancho automático para mantener la proporción
                                  maxHeight: "110%",
                                }}
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
                              height: "76vh",
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
            </Box>
          </div>
          <div className="right-side">
            <ENDescription />
          </div>

          <div className="footer">
            <ProjectNavigation />
          </div>
        </div>
      </Hidden>

      {/* VERSIÓN MÓVIL */}
      <Hidden mdUp>
        <HeaderDescription />
        <Box width={"90%"} margin={"auto"}>
          {/* Muestra el título del proyecto */}
          <Typography
            variant="h4"
            component="div"
            sx={{
              textTransform: "uppercase",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "100",
              mt: 10,
            }}
          >
            {project && splitText(project.name)}
          </Typography>

          {/* Muestra las imágenes en una sola columna */}
          {project &&
            project.gallery.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Image ${index + 1}`}
                style={{ width: "100%", objectFit: "cover", marginTop: "10px" }}
              />
            ))}
        </Box>
      </Hidden>
    </>
  );
};

export default Descripcion2;

