import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  Hidden,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawe";
import logo_ow_negro from "../../../../public/imagenes/OWnegro.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  const { t, i18n } = useTranslation();
  const { handleLenguage, lenguage } = useContext(AuthContext);

  // Función para cambiar el idioma a español
  const cambiarAEspanol = () => {
    i18n.changeLanguage("es");
    handleLenguage("es");
  };

  // Función para cambiar el idioma a inglés
  const cambiarAIngles = () => {
    i18n.changeLanguage("en");
    handleLenguage("en");
  };

  const [open, setOpen] = useState(false);

  const cerrarBar = () => {
    return setOpen(false);
  };

  return (
    <>
      {/* VERSION DESKTOP NAVBAR */}
      <Hidden mdDown>
        <div style={{ overflow: "hidden" }}>
          <AppBar
            /* position="fixed" */
            sx={{
              boxShadow: 0,
              bgcolor: "white",
              /*  top: isScrolled ? "0" : "-64px", */
              transition: "top 0.3s",
              zIndex: 1500,
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
      </Hidden>
      {/* MANEJADOR DE LENGUAJES
       */}{" "}
      <Hidden mdDown>
        <AppBar position="fixed" sx={{ width: "100%" }}>
          <Grid
            container
            justifyContent="space-between"
            sx={{ position: "fixed", top: "50%" }}
          >
            <Grid item>
              <Button
              
                disableRipple
                sx={{
                  
                  "&:hover": {
                    backgroundColor: "transparent",
                    transition: "none",
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
            </Grid>
            <Grid item>
              <Button
                disableRipple
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    transition: "none",
                  },
                }}
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
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </Hidden>
      {/* VERSION MOBILE NAVBAR */}
      <Hidden mdUp>
        <AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: "white" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box>
              <img width={"50%"} src="/imagenes/ownegro.png" alt="" />
            </Box>
            <Box>
              <Button
                onClick={() => setOpen(true)}
                sx={{
                  color: "#1d1d1d",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <MenuIcon fontSize="large" />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer open={open} anchor="top" onClose={() => setOpen(false)}>
          <NavListDrawer onclose={cerrarBar} />
        </Drawer>
      </Hidden>
    </>
  );
};
export default NavBar2;
