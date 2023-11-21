import { useState } from "react";
import imagen_default from "../../../../../../../public/imagenes/defaults/imagen_default.jfif";
import { uploadFile } from "../../../../../../firebaseConfig/FirebaseConfig";
import { useEffect } from "react";

const ImagePpalEdit = ({ project, setProject }) => {
	const [file, setFile] = useState(undefined);
	const [loadingImage, setLoadingImage] = useState(false);
	const [isImageUpload, setIsImageUpload] = useState(false);
	const [clickFile, setClickFile] = useState(false);

	useEffect(() => {
		// Verificar si `project.image_ppal` ya tiene un valor
		if (project.image_ppal && !file) {
			setFile(project.image_ppal);
		}
	}, [project.image_ppal, file]);

	const handleChange = (e) => {
		/* setClickFile(true);
		setFile(e.target.files[0]); */
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			setClickFile(true);
			setFile(selectedFile);
		}
	};
	const handleImageUpload = async (file) => {
		try {
			setLoadingImage(true);
			let url = await uploadFile(file);
			setFile(url);
			setIsImageUpload(true);
			setProject((prevData) => ({
				...prevData,
				image_ppal: url,
			}));
			setLoadingImage(false);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(project.image_ppal);
	console.log("file es: ", file);
	console.log(project);

	return (
		<div>
			<label htmlFor="">Imagen del Listado</label>
			<img src={file ? file : imagen_default} alt="" width={300} />
			<input
				type="file"
				name="image_ppal"
				onChange={(e) => handleChange(e)} //subir la url primero a storage
			/>
			{file && clickFile && (
				<button type="button" onClick={() => handleImageUpload(file)}>
					Cargar imagen!
				</button>
			)}
			{loadingImage && <p>Cargando imagen...</p>}
			{isImageUpload && <p>¡Imagen subida!</p>}

			{/* REVISAR */}
		</div>
	);
};

export default ImagePpalEdit;
