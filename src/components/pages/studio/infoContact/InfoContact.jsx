import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const InfoContact = () => {
  const { t } = useTranslation();

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
        >
          {t("address")}
        </h6>
        <p>Concepción Arenal 4244, #133</p>
        <p>Barrio Parque Los Andes, </p>
        <p>Buenos Aires, Argentina</p>
      </Box>
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
            letterSpacing: "0.5px",
            fontWeight: "100",
          }}
        >
          {t("contact")}
        </h6>
        <p>+54 9 11 5101 5553</p>
        <p>  
          <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" href="mailto:info@ordonezwenzke.com">info@ordonezwenzke.com</a> 
        </p>
     
       
        <p >  
        <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" href="https://www.instagram.com/ordonezwenzke_ow/">@ordonezwenzke_ow</a> 
        </p>
      </Box>
    </Box>
  );
};

export default InfoContact;
