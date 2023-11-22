import { useState } from "react";
import { db, uploadFile } from "../../../../firebaseConfig/FirebaseConfig";
import AddGallery3 from "./galleryImages/AddGallery3";
import AddSlides from "./fichasSlides/AddSlides";
import ImagePpal from "./imagePpal/ImagePpal";
import { addDoc, collection } from "firebase/firestore";

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

		const collectionRef = collection(db, "projects_test");

		try {
			let res = await addDoc(collectionRef, formData);
			console.log("respuesta exitosa de creacion de producto: ", res);

			//opcional: mostrar mensaje de exito
		} catch (error) {
			console.log(error);
		}
	};

	console.log("formData addprojec: ", formData);

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

				<br />
				<br />
				<hr />
				<br />
				<br />
				<button type="submit">Crear Producto</button>
			</form>
		</div>
	);
};

export default AddProjectsContainer;
