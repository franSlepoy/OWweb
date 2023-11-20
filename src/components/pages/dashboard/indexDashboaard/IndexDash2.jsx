import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebaseConfig/FirebaseConfig";

const IndexDash2 = () => {
	const [textValue, setTextValue] = useState("");
	const [submittedText, setSubmittedText] = useState("");

	const handleTextareaChange = (event) => {
		setTextValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmittedText(textValue);

		const projectsCollection = collection(db, "projects");
		addDoc(projectsCollection, { textWithStyles: textValue })
			.then((res) => {
				console.log(res.id);
			})
			.catch((err) => console.log(err));

		setTextValue("");
	};

	// Función para aplicar estilos al texto
	const applyStyles = (text) => {
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
	};

	return (
		<div>
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
		</div>
	);
};

export default IndexDash2;
