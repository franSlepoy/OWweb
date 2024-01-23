import { useEffect, useState } from "react";
import {
  Box,
  Hidden,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig/FirebaseConfig";
import { Link } from "react-router-dom";
import proyectosStyle from "./proyectosStyle.module.css";

const Proyectos = () => {
  /*   const [hoveredItem, setHoveredItem] = useState(null); */
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    (async () => {
      let refCollection = collection(db, "projects_test");
      let res = await getDocs(refCollection);

      let productosFinales = res.docs.map((p) => {
        return {
          ...p.data(),
          id: p.id,
        };
      });
      setProjects(productosFinales);
    })();
  }, []);

  function formatProjectName(name) {
    // Dividir el nombre por guiones y tomar todos los elementos excepto el último
    const parts = name.split(" - ");
    parts.pop(); // Elimina el último elemento (que es la fecha)
    console.log(
      "Esto es parts.join de cada nombre, asi quedo: ",
      parts.join(" - ")
    );
    return parts.join(" - "); // Une los elementos restantes manteniendo el guion original
  }

  console.log(projects);

  return (
    <>
      <Hidden mdDown>
        <Box id="projects" width={"95%"} m={"auto"} mt={10}>
          <ImageList variant="standard" cols={3} gap={0}>
            {projects &&
              projects
                .filter((item) => item.visible)
                .map((item, index) => (
                  <ImageListItem
                    key={item.id}
                    className={
                      index % 3 === 2
                        ? proyectosStyle.rightBorder
                        : proyectosStyle.leftBorder
                    }
                  >
                    <Link
                      to={`/project2/${item.id}`}
                      style={{ textDecoration: "none", position: "relative" }}
                    >
                      <div
                        className={proyectosStyle.hoverContainer}
                        data-name={item.name}
                      >
                        <img
                          srcSet={`${item.image_ppal}`}
                          src={`${item.image_ppal}`}
                          alt={item.name}
                          loading="lazy"
                          className={proyectosStyle.projectImage}
                        />
                        <div className={proyectosStyle.hoverText}>
                          <p>{formatProjectName(item.name)}</p>
                        </div>
                      </div>
                    </Link>
                  </ImageListItem>
                ))}

            {/* Agregar tarjetas blancas para completar la última fila */}
            {Array.from(
              { length: projects ? 3 - (projects.length % 3) : 0 },
              (_, index) => (
                <ImageListItem
                  key={`blank-${index}`}
                  className={proyectosStyle.blankCard}
                >
                  {/* Contenido de la tarjeta blanca con línea diagonal */}
                  <div className={proyectosStyle.blankCardContent}>
                    <div className={proyectosStyle.diagonalLine}></div>
                  </div>
                </ImageListItem>
              )
            )}
          </ImageList>
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Box width={"98%"} m={"auto"} id="projects">
          <ImageList variant="classic" cols={1} gap={0}>
            {projects
              ?.filter((item) => item.visible)
              .map((item, index) => (
                <ImageListItem sx={{ mt: 5 }} key={item.id}>
                  <Link
                    to={`/project/${item.id}`}
                    style={{ textDecoration: "none", position: "relative" }}
                  >
                    <div data-name={item.name}>
                      <Box width={"90%"} margin={"auto"}>
                        <img
                          width={"100%"}
                          height={"450px"}
                          srcSet={`${item.image_ppal}`}
                          src={`${item.image_ppal}`}
                          alt={item.name}
                          loading="lazy"
                        />
                        <Typography
                          sx={{
                            fontFamily: "programatica , san.serif",
                            fontSize: "16px",
                            lineHeight: "20px",
                            letterSpacing: 0.5,
                            color: "#000",
                            textTransform: "uppercase",
                          }}
                        >
                          <p>{formatProjectName(item.name)}</p>
                        </Typography>
                      </Box>
                    </div>
                  </Link>
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
      </Hidden>
    </>
  );
};

export default Proyectos;
