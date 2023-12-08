import Carousel from "react-material-ui-carousel";
import { Box, Card, Typography } from "@mui/material";
import ImgCard from "../../commond/imgCard/ImgCard";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig/FirebaseConfig";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Descripcion = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    let refCollection = collection(db, "projects_test");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => {
      setProject(res.data());
    });
  }, [id]);

  const { lenguage } = useContext(AuthContext);

  console.log("el id es: ", id);

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
        {/*     <Carousel
          indicators={false}
          navButtonsProps={{
            style: {
              display: "none",
            },
          }}
          animation="fade"
          timeout={1}
          sx={{ width: "95%", m: "auto" }}
        > */}
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
        {/*  </Carousel> */}
      </Box>
    </>
  );
};

export default Descripcion;
