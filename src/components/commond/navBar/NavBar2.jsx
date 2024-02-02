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
  

  // Función para cambiar el idioma a español
  

  const [open, setOpen] = useState(false);

  const cerrarBar = () => {
    return setOpen(false);
  };

  return (
    <>
       <>
      {/* VERSION DESKTOP NAVBAR */}
      <Hidden mdDown>
        <div style={{ overflow: "hidden" }}>
          <AppBar
            sx={{
             /*  position: isSticky ? "fixed" : "sticky", */
              boxShadow: 0,
              bgcolor: "white",
             /*  top: isScrolled ? "0px" : "-672px", */
              transition: "top 0.3s",
              zIndex: 99999999999999,
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box
                width={"33,3%"}
                display={"flex"}
                /* onClick={handleProjectsClick} */
              >
                <a
                  href="#projects"
                  style={{
                    paddingLeft: "10px",
                    fontSize: "16px",
                    color: "#000",
                    underline: "none",
                    fontFamily: "Pragmatica",
                    textDecoration: "none",
                  }}
                >
                  jkmbkhvh
                </a>
               
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "rgba(226,226,199)",
                      borderRadius: "100%",
                      ml: 1,
                    }}
                  >
                    {/* circulo */}
                  </Box>
                
              </Box>

              <Box width={"33,3%"} ml={-8}>
                <img width={"320px"} src={logo_ow_negro} alt="" />
              </Box>

              <Box width={"33,3%"} display={"flex"} >
                
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "rgba(226,226,199)",
                      borderRadius: "100%",
                      mr: 1,
                    }}
                  >
                    {/* circulo */}
                  </Box>
             
                <a
                  href="#studio"
                  style={{
                    paddingRight: "10px",
                    textAlign: "end",
                    fontSize: "16px",
                    color: "#000",
                    underline: "none",
                    fontFamily: "Pragmatica",
                    textDecoration: "none",
                  }}
                >
                  hdjcjhvkb
                </a>
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
            sx={{
              position: "fixed",
              top: "50%",
              cursor:
                'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(226,226,199,0.5)"><circle cx="12" cy="12" r="10"/></svg>\') 12 12, auto',
            }}
          >
            <Grid item>
              <Button
                disableRipple
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    transition: "none",
                    cursor:
                      'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="rgba(226,226,199,0.5)"><circle cx="12" cy="12" r="10"/></svg>\') 12 12, auto',
                  },
                }}
               /*  onClick={cambiarAEspanol} */
               /*  data-i18n="es" */
              >
                <Box
                  sx={{
                    fontFamily: "sans-serif",

                    lineHeight: "12px",
                    color: "#1d1d1d",
                    ml: -3,
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
                    cursor:
                      'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="rgba(226,226,199,0.5)"><circle cx="12" cy="12" r="10"/></svg>\') 12 12, auto',
                  },
                }}
               /*  onClick={cambiarAIngles}
                data-i18n="en" */
              >
                <Box sx={{ mr: -3 }}>
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
              <img width={"70%"} src={logo_ow_negro} alt="" />
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
     
    </>
  );
};
export default NavBar2;
