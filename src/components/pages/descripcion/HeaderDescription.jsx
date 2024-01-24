import { AppBar, Box, Button, Drawer, Hidden, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import logo_ow_negro from "../../../../public/imagenes/OWnegro.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import NavListDrawer from "../../commond/navBar/NavListDrawe";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderDescription = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const cerrarBar = () => {
    return setOpen(false);
  };

  return (
    <>
    <Hidden mdDown>
    <AppBar
        sx={{
          boxShadow: 0,
          bgcolor: "white",
          position: "static",
          height: "12vh",
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
    </Hidden>

    <Hidden mdUp>
    
   
        <AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: "white" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box>
              <img width={"50%"} src={logo_ow_negro}  alt="" />
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

export default HeaderDescription;
