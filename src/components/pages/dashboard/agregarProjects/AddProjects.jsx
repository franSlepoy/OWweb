import { useState } from "react";
import { uploadFile } from "../../../../firebaseConfig/FirebaseConfig";
import AddGallery3 from "./galleryImages/AddGallery3";
import AddSlides from "./fichasSlides/AddSlides";
import ImagePpal from "./imagePpal/ImagePpal";

const AddProjectsContainer = () => {
	const [formData, setFormData] = useState({
		name: "",
		image_ppal: "",
		slides: {
			slides1_en: "",
			slides1_es: "",
			slides2_en: "",
			slides2_es: "",
		},
		memories: { memorie_en: "", memorie_es: "" },
		gallery: [],
	});
	const [file, setFile] = useState(null);
	const [isImageUpload, setIsImageUpload] = useState(false);
	const [loadingImage, setLoadingImage] = useState(false);

	const handleImageUpload = async (file) => {
		try {
			setLoadingImage(true);
			let url = await uploadFile(file);
			setIsImageUpload(true);
			setFormData((prevData) => ({
				...prevData,
				image_ppal: url,
			}));
			setLoadingImage(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("Valores del formulario a enviar: ", formData);

		/* 	const collectionRef = collection(db, "projects");

		try {
			await addDoc(collectionRef, formData);

			//opcional: mostrar mensaje de exito
		} catch (error) {
			console.log(error);
		} */
	};

	return (
		<div>
			<h2>PROYECTOS</h2>
			<p>Listado - Agregar proyectos </p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="">Proyecto</label>
					<input
						type="text"
						placeholder="Nombre del proyecto"
						name="name"
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					/>
				</div>

				<ImagePpal
					formData={formData}
					setFile={setFile}
					file={file}
					handleImageUpload={handleImageUpload}
					loadingImage={loadingImage}
					isImageUpload={isImageUpload}
				/>

				<AddSlides setFormData={setFormData} formData={formData} />

				<AddGallery3 setFormData={setFormData} formData={formData} />

				<button type="submit">Crear Producto</button>
			</form>
		</div>
	);
};

export default AddProjectsContainer;
