import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../../context/AuthContext";

const ESDescription = () => {
  const { i18n } = useTranslation();
  const { handleLenguage } = useContext(AuthContext);

  // Función para cambiar el idioma a español
  const cambiarAEspanol = () => {
    i18n.changeLanguage("es");
    handleLenguage("es");
  };

  // Función para cambiar el idioma a inglés
  return (
    <Button
      disableRipple
      sx={{
        "&:hover": {
          backgroundColor: "transparent",
          transition: "none",
          minWidth: "0 !important",
        },
      }}
      style={{
        cursor:
          "url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23e2e2c7'><circle cx='12' cy='12' r='10' /></svg>\") 12 12, auto",
      }}
      onClick={cambiarAEspanol}
      data-i18n="es"
    >
      <Box
        sx={{
          fontFamily: "sans-serif",

          lineHeight: "12px",
          color: "#1d1d1d",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontFamily: "sans-serif",
            lineHeight: "12px",
            color: "#1d1d1d",
          }}
        >
          e
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontFamily: "sans-serif",
            lineHeight: "12px",
            color: "#1d1d1d",
          }}
        >
          s
        </Typography>
      </Box>
    </Button>
  );
};

export default ESDescription;
