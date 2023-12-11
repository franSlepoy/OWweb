import { Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const InfoContact = ({ modulosStudio }) => {
  const { lenguage } = useContext(AuthContext);

  const splitContent = (content) => {
    if (content) {
      const index = content.indexOf(" ");
      const title = content.substring(0, index);
      const text = content.substring(index + 1);
      return { title, text };
    }
    return { title: "", text: "" };
  };

  const formatText = (text) => {
    // Divide la cadena en párrafos utilizando la coma como delimitador
    const paragraphs = text
      .split("$")
      .map((paragraph, index) => <p key={index}>{paragraph.trim()}</p>);

    return paragraphs;
  };

  const leftContent =
    lenguage === "es"
      ? splitContent(modulosStudio?.modulo4?.col_izq_es)
      : splitContent(modulosStudio?.modulo4?.col_izq_en);
  const rightContent =
    lenguage === "es"
      ? splitContent(modulosStudio?.modulo4?.col_der_es)
      : splitContent(modulosStudio?.modulo4?.col_der_en);

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
          {leftContent.title}
        </h6>
        <div>{formatText(leftContent.text)}</div>
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
            fontWeight: "100",
            letterSpacing: "0.5px",
          }}
        >
          {rightContent.title}
        </h6>
        <div>{formatText(rightContent.text)}</div>
      </Box>
    </Box>
  );
};

export default InfoContact;
