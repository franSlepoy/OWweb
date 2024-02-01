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
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    (async () => {
      let refCollection = collection(db, "projects_test");
      let res = await getDocs(refCollection);
      let productosFinales = res.docs.map((p) => ({
        ...p.data(),
        id: p.id,
      }));
      setProjects(productosFinales);
    })();
  }, []);

  function formatProjectName(name) {
    const parts = name.split(" - ");
    parts.pop();
    return parts.join(" - ");
  }

  return (
    <>
      {projects !== null ? (
        <>
          <Hidden mdDown>
            <Box id="projects" width={"95%"} m={"auto"}>
              <ImageList variant="standard" cols={3} gap={0}>
                {projects
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
                        style={{
                          textDecoration: "none",
                          position: "relative",
                        }}
                      >
                        <div
                          className={proyectosStyle.hoverContainer}
                          data-name={item.name}
                        >
                          <img
                            style={{ marginTop: 42 }}
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
                {Array.from(
                  { length: projects ? 3 - (projects.length % 3) : 0 },
                  (_, index) => (
                    <ImageListItem
                      key={`blank-${index}`}
                      className={proyectosStyle.blankCard}
                    >
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
                  .filter((item) => item.visible)
                  .map((item, index) => (
                    <ImageListItem sx={{ mt: 5 }} key={item.id}>
                      <Link
                        to={`/project2/${item.id}`}
                        style={{
                          textDecoration: "none",
                          position: "relative",
                        }}
                      >
                        <div data-name={item.name}>
                          <Box width={"90%"} margin={"auto"}>
                            <img
                              width={"100%"}
                              height={"450px"}
                              style={{ objectFit: "cover" }}
                              srcSet={`${item.image_ppal}`}
                              src={`${item.image_ppal}`}
                              alt={item.name}
                              loading="lazy"
                            />
                            <Typography
                              sx={{
                                fontSize: "16px",
                                lineHeight: "20px",
                                letterSpacing: 0.5,
                                fontWeight: "100",
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
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Proyectos;


