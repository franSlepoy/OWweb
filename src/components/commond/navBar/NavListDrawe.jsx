import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import StylesNavBar from "./NavBar.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function NavListDrawer({ onclose }) {
  const { t, i18n } = useTranslation();
  const { handleLenguage } = useContext(AuthContext);
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

  return (
    <Box>
      <nav aria-label="main mailbox folders">
        <List className={StylesNavBar.lista}>
          <a
            href="/#projects"
            style={{
              fontSize: "16px",
              color: "#000",
              underline: "none",
              textDecoration: "none",
            }}
            onClick={onclose}
          >
            <ListItem disablePadding>
              <ListItemButton>{t("tituloNavBarIzquierda")}</ListItemButton>
            </ListItem>
          </a>

          <Divider />
          <a
            href="/#studio"
            style={{
              fontSize: "16px",
              color: "#000",
              underline: "none",
              textDecoration: "none",
            }}
            onClick={onclose}
          >
            <ListItem disablePadding>
              <ListItemButton>{t("tituloNavBarDerecha")}</ListItemButton>
            </ListItem>
          </a>

          <Divider />

          <Box
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box>
              <Button
                onClick={cambiarAEspanol}
                data-i18n="es"
              >
                <Typography sx={{ fontSize: "16px", color: "#000" }}>
                  ES
                </Typography>
              </Button>
            </Box>

            <Box>
              <Button
                onClick={cambiarAIngles}
                data-i18n="en"
              >
                <Typography sx={{ fontSize: "16px", color: "#000" }}>
                  EN
                </Typography>
              </Button>
            </Box>
          </Box>
        </List>
      </nav>
    </Box>
  );
}
