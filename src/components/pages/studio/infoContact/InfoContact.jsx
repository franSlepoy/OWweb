import { Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const InfoContact = ({ modulosStudio }) => {
  const { lenguage } = useContext(AuthContext);
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-around",
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: { md: "47%", xs: "100%" },
          letterSpacing: "1px",
          fontSize: { lg: "42px", md: "38px", sm: "32px", xs: "24px" },
          lineHeight: { md: "54px", xs: "32px" },
        }}
      >
        <h6
          style={{
            fontFamily: "'Pragmatica', sans-serif",
            fontSize: "17px",
            lineHeight: "22px",
            color: "#000",
            fontWeight: "100",
            letterSpacing: "0.5px",
          }}
        ></h6>
        {lenguage === "es" ? (
          <div>{modulosStudio?.modulo4?.col_izq_es}</div>
        ) : (
          <div>{modulosStudio?.modulo4?.col_izq_en}</div>
        )}
        {/* 
        <p>Concepción Arenal 4244, #133</p>
        <p>Barrio Parque Los Andes, </p>
        <p>Buenos Aires, Argentina</p>
     */}{" "}
      </Box>
      {/*   <Box
        sx={{
          width: { md: "47%", xs: "100%" },
          letterSpacing: "1px",
          fontSize: { lg: "42px", md: "38px", sm: "32px", xs: "24px" },
          lineHeight: { md: "54px", xs: "32px" },
        }}
      >
        <h6
          style={{
            fontFamily: "'Pragmatica', sans-serif",
            fontSize: "17px",
            lineHeight: "22px",
            color: "#000",
            letterSpacing: "0.5px",
            fontWeight: "100",
          }}
        ></h6>
        <p>+54 9 11 5101 5553</p>
        <p>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:info@ordonezwenzke.com"
          >
            info@ordonezwenzke.com
          </a>
        </p>

        <p>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.instagram.com/ordonezwenzke_ow/"
          >
            @ordonezwenzke_ow
          </a>
        </p>
      </Box> */}
      <Box>
        {lenguage === "es" ? (
          <div>{modulosStudio?.modulo4?.col_der_es}</div>
        ) : (
          <div>{modulosStudio?.modulo4?.col_der_en}</div>
        )}
      </Box>
    </Box>
  );
};

export default InfoContact;
