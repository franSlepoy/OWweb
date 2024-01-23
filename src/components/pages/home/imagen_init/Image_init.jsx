import { Box } from "@mui/material";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig/FirebaseConfig";
import image_init_style from "./image_init_style.module.css";

const Image_init = () => {
  const [inicio, setInicio] = useState("");

  useEffect(() => {
    let refCollection = collection(db, "inicio");
    let refDoc = doc(refCollection, "D8eDUtoTEElGXUAON9dg");
    getDoc(refDoc).then((res) => {
      setInicio(res.data());
    });
  }, []);

  return (
    <Box
      sx={{
        zIndex: 1200,
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {inicio ? (
        <img
          src={inicio.image_desktop ? inicio.image_desktop : ""}
          alt="Imagen de inicio"
          style={{ height: "100vh",/*  width: "100%"  */}}
        />
      ) : (
        <div className={image_init_style.container}></div>
      )}
    </Box>
  );
};

export default Image_init;
