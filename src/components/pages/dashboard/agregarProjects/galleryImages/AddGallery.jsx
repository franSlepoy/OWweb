import { useState } from "react";
import { uploadFile } from "../../../../../firebaseConfig/FirebaseConfig";

const AddGallery = ({ setFormData }) => {
	// PARA MANEJAR VARIAS IMAGENES
	const [selectedGalleryImages, setSelectedGalleryImages] = useState([]);
	const [uploadingImages, setUploadingImages] = useState([]);

	// La función de subir recorre el array y sube todas:
	const uploadGalleryImages = async () => {
		setUploadingImages(selectedGalleryImages.map((img) => img.name));

		const uploadedImages = [];

		for (let img of selectedGalleryImages) {
			const url = await uploadFile(img);
			uploadedImages.push({ url });
		}

		// setea las URLs subidas
		setFormData((prev) => ({
			...prev,
			gallery: [...prev.gallery, ...uploadedImages],
		}));

		setUploadingImages([]);
	};
	return (
		<div>
			{/* 	<p>Galeria de imagenes</p>
					<img src={imagen_default} alt="" />
					<input type="file" />
					<label htmlFor="">
						<input type="radio" />
						Doble
					</label>

					<input type="text" placeholder="Number" /> */}
			<hr />
			<br />
			<br />

			<label htmlFor="">Soy el primer input</label>
			<input
				type="file"
				onChange={(e) =>
					setSelectedGalleryImages((prev) => [...prev, e.target.files[0]])
				}
			/>

			{/* {selectedGalleryImages.map((img) => (
						<input
							key={img.name}
							type="file"
							placeholder="Soy un input del array"
							// manejar onchange
						/>
					))} */}
			{selectedGalleryImages.map((img) => (
				<div key={img.name}>
					<img src={URL.createObjectURL(img)} alt={img.name} width={300} />

					{uploadingImages.includes(img.name) && <p>Subiendo...</p>}
					<input
						type="file"
						onChange={(e) => {
							setSelectedGalleryImages((prev) => [
								...prev.filter((i) => i.name !== img.name),
								e.target.files[0],
							]);
						}}
					/>

					<button
						disabled={uploadingImages.includes(img.name)}
						onClick={() => {
							setSelectedGalleryImages((prev) =>
								prev.filter((i) => i.name !== img.name)
							);
						}}
					>
						Eliminar
					</button>
				</div>
			))}

			{selectedGalleryImages.length > 0 && (
				<button onClick={uploadGalleryImages}>Subir imágenes</button>
			)}

			<hr />
			<br />
			<br />
		</div>
	);
};

export default AddGallery;
