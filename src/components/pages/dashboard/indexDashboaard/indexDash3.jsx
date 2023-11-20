import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebaseConfig/FirebaseConfig";

const IndexDash3 = () => {
	const [textValue, setTextValue] = useState("");
	const [submittedText, setSubmittedText] = useState("");

	const handleTextareaChange = (event) => {
		setTextValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmittedText(textValue);

		const projectsCollection = collection(db, "projects");
		addDoc(projectsCollection, { textWithLineBreaks: textValue })
			.then((res) => {
				console.log(res.id);
			})
			.catch((err) => console.log(err));

		setTextValue("");
	};

	// Función para dividir el string con saltos de línea y renderizarlo
	const renderText = () => {
		const lines = submittedText.split("\n");
		const textComponents = [];
		let currentDiv = null;

		for (let line of lines) {
			if (line === "") {
				// Si encuentra un salto de línea, crea un nuevo div
				if (currentDiv) {
					textComponents.push(
						<div key={textComponents.length}>{currentDiv}</div>
					);
				}
				currentDiv = null; // Reinicia el div
			} else {
				// Si no es un salto de línea, agrega el contenido al div actual
				if (!currentDiv) {
					currentDiv = [];
				}
				currentDiv.push(
					line.startsWith("#") ? (
						<h1 key={currentDiv.length}>{line.substring(1)}</h1>
					) : line.startsWith("##") ? (
						<h2 key={currentDiv.length}>{line.substring(2)}</h2>
					) : (
						<p key={currentDiv.length}>{line}</p>
					)
				);
			}
		}

		// Asegurarse de agregar el último div si no termina con un salto de línea
		if (currentDiv) {
			textComponents.push(<div key={textComponents.length}>{currentDiv}</div>);
		}

		return textComponents;
	};

	return (
		<div>
			<h1>Dashboard container</h1>

			<form onSubmit={handleSubmit}>
				<textarea
					placeholder="Aca va la info"
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
				<h2>Texto Dividido y Renderizado:</h2>
				{renderText()}
			</div>
		</div>
	);
};

export default IndexDash3;
