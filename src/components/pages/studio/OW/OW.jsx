import { Box, Divider } from "@mui/material";
import owstyles from "./OW.module.css";
import { useTranslation } from "react-i18next";
import O_img from "../../../../../public/imagenes/OW/o.svg";
import W_img from "../../../../../public/imagenes/OW/w.svg";

const OW = () => {
  const { t } = useTranslation();

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
        <p className={owstyles.parrafos}>{t("o1")}</p>
        <p className={owstyles.parrafos}>{t("o2")}</p>

        <p className={owstyles.parrafos}>{t("o3")}</p>
        <p className={owstyles.parrafos}>{t("o4")}</p>
        <p className={owstyles.parrafos}>{t("o5")}</p>
        <p className={owstyles.parrafos}>{t("o6")}</p>
      </Box>
      <Divider
        color="grey"
        sx={{
          borderWidth: { xs: "none", md: 1 },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Pragmatica', sans-serif",
          pl: "20px",
          padding: { md: "0 30px 30px 0", xs: "0 0 30px 0" },
          width: { md: "45%", xs: "100%" },
        }}
      >
        <div className={owstyles.img_container}>
          <img src={W_img} />
        </div>
        <p className={owstyles.parrafos}>{t("w1")}</p>
        <p className={owstyles.parrafos}>{t("w2")}</p>
        <p className={owstyles.parrafos}>{t("w3")}</p>
        <p className={owstyles.parrafos}>{t("w4")}</p>
        <p className={owstyles.parrafos}>{t("w5")}</p>
        <p className={owstyles.parrafos}>{t("w6")}</p>
      </Box>
    </Box>
  );
};

export default OW;
