import { useState } from "react";

import { Box } from "@mui/material";

const IndexDash2 = () => {
  const [textValue, setTextValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleTextareaChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedText(textValue);

    /*   const projectsCollection = collection(db, "projects");
    addDoc(projectsCollection, { textWithStyles: textValue })
      .then((res) => {
        console.log(res.id);
      })
      .catch((err) => console.log(err)); */

    setTextValue("");
  };

  // Función para aplicar estilos al texto
  /* const applyStyles = (text) => {
		const lines = text.split("\n");
		return lines.map((line, index) => {
			if (line.startsWith("# ")) {
				return <h1 key={index}>{line.slice(2)}</h1>;
			} else if (line.startsWith("## ")) {
				return <h2 key={index}>{line.slice(3)}</h2>;
			} else {
				return <p key={index}>{line}</p>;
			}
		});
	}; */

  const applyStyles = (text) => {
    const lines = text.split("\n");
    let buffer = [];
    let result = [];

    lines.forEach((line, index) => {
      if (line.trim() === "") {
        if (buffer.length > 0) {
          result.push(<div key={index}>{buffer}</div>);
          buffer = [];
        }
      } else {
        if (line.startsWith("# ")) {
          buffer.push(<h1 key={index}>{line.slice(2)}</h1>);
        } else if (line.startsWith("## ")) {
          buffer.push(<h2 key={index}>{line.slice(3)}</h2>);
        } else {
          buffer.push(<p key={index}>{line}</p>);
        }
      }
    });

    if (buffer.length > 0) {
      result.push(<div key={lines.length}>{buffer}</div>);
    }

    return result;
  };

  return (
    <Box sx={{ mt: 5, ml: 5 }}>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Aca va la info (puedes usar # para títulos y ## para subtítulos)"
          value={textValue}
          onChange={handleTextareaChange}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>

      <div>
        <h2>Texto Enviado:</h2>
        <textarea value={submittedText} readOnly></textarea>
      </div>

      <div>
        <h2>Texto con Estilos Aplicados:</h2>
        {applyStyles(submittedText)}
      </div>
    </Box>
  );
};

export default IndexDash2;
