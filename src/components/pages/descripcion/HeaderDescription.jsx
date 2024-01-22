import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import logo_ow_negro from "../../../../public/imagenes/OWnegro.png";
import { useTranslation } from "react-i18next";

const HeaderDescription = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <AppBar
        sx={{
          boxShadow: 0,
          bgcolor: "white",
          position: "static",
          height: "14vh",
          p: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box width={"33,3%"} display={"flex"}>
            <Link
              to="/#projects"
              style={{
                fontSize: "16px",
                color: "#000",
                underline: "none",
                fontFamily: "Pragmatica",
                textDecoration: "none",
              }}
            >
              {t("tituloNavBarIzquierda")}
            </Link>
          </Box>

          <Box width={"26%"}>
            <img width={"320px"} src={logo_ow_negro} alt="" />
          </Box>

          <Box width={"33,3%"}>
            <Link
              to="/#studio"
              style={{
                textAlign: "end",
                fontSize: "16px",
                color: "#000",
                underline: "none",
                fontFamily: "Pragmatica",
                textDecoration: "none",
              }}
            >
              {t("tituloNavBarDerecha")}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderDescription;
