import { Box } from "@mui/material";
import TextInitial from "./textInitial/TextInitial";
import OW from "./OW/OW";
import ImgStudio from "./imgstudio/ImgStudio";
import InfoContact from "./infoContact/InfoContact";
import { useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebaseConfig/FirebaseConfig";

const StudioContainer = () => {

  const [modulosStudio , setModulosStudio] = useState("")

  useEffect(()=>{
		let refCollection = collection(db, "studio");
		let refDoc = doc(refCollection, "modulos_studio_test");
		getDoc(refDoc).then((res) => {
      setModulosStudio(res.data());
		});
	}, [])


  return (
    <Box
      id="studio"
      width={"93%"}
      m={"auto"}
      sx={{
        borderLeft: { md: "solid black 2px", xs: "none" },
        borderRight: { md: "solid black 2px", xs: "none" },
        p: { md: 4, xs: 1 },
      }}
    >
      <div style={{ marginTop: "50px" }}>
        <TextInitial />
        <OW />
        <ImgStudio modulosStudio={modulosStudio}/>
        <InfoContact />
      </div>
    </Box>
  );
};

export default StudioContainer;
