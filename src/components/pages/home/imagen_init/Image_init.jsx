import { Box } from "@mui/material";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig/FirebaseConfig";

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
    <Box sx={{ zIndex: 1200, position: "relative" }}>
      <img
        /* height="766px" */
        width="100%"
        src={inicio.image_desktop ? inicio.image_desktop : ""}
        alt="Imagen de inicio"
        style={{ height: "100vh" }}
      />
    </Box>
  );
};

export default Image_init;
