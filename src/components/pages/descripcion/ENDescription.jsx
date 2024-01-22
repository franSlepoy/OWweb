import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../../context/AuthContext";
import "./descripcion_styles.css";

const ENDescription = () => {
  const { t, i18n } = useTranslation();
  const { handleLenguage, lenguage } = useContext(AuthContext);
  const cambiarAIngles = () => {
    i18n.changeLanguage("en");
    handleLenguage("en");
  };
  return (
    <button
      className="button_leng"
      style={{
        cursor:
          "url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23e2e2c7'><circle cx='12' cy='12' r='10' /></svg>\") 12 12, auto",
      }}
      onClick={cambiarAIngles}
      data-i18n="en"
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "12px",
            lineHeight: "12px",
            color: "#1d1d1d",
          }}
        >
          e
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "12px",
            lineHeight: "12px",
            color: "#1d1d1d",
          }}
        >
          n
        </Typography>
      </Box>
    </button>
  );
};

export default ENDescription;
