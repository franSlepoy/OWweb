import { Box, Divider } from "@mui/material";
import owstyles from "./OW.module.css";
import O_img from "../../../../../public/imagenes/OW/o.svg";
import W_img from "../../../../../public/imagenes/OW/w.svg";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const OW = ({ modulosStudio }) => {
  const { lenguage } = useContext(AuthContext);

  console.log(modulosStudio);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        gap: 4,
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Pragmatica', sans-serif",
          padding: { md: "0 30px 30px 0", xs: "0 0 30px 0" },
          width: { md: "45%", xs: "100%" },
        }}
      >
        <div className={owstyles.img_container}>
          <img src={O_img} />
        </div>
        <p>
          {(lenguage == "es"
            ? modulosStudio?.modulo2?.o_es
            : modulosStudio?.modulo2?.o_en
          )
            ?.split(/\.,/)
            .map((item, key) => {
              return (
                <span
                  key={key}
                  className={owstyles.parrafos}
                >
                  {item}
                  <br />
                  <br />
                </span>
              );
            })}
        </p>
      </Box>

      <Divider
        color="black"
        sx={{
          width: { xs: "none", md: "0.5px" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Pragmatica', sans-serif",
          padding: { md: "0 30px 30px 0", xs: "0 0 30px 0" },
          width: { md: "45%", xs: "100%" },
        }}
      >
        <div className={owstyles.img_container}>
          <img src={W_img} />
        </div>
       
       <p>
          {(lenguage == "es"
            ? modulosStudio?.modulo2?.w_es
            : modulosStudio?.modulo2?.w_en
          )
            ?.split(/\.,/)
            .map((item, key) => {
              return (
                <span
                  key={key}
                  className={owstyles.parrafos}
                >
                  {item}
                  <br />
                  <br />
                </span>
              );
            })}
        </p>
      
        
      </Box>
    </Box>
  );
};

export default OW;
