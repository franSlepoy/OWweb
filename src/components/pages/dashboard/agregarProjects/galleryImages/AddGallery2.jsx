import { useState } from "react";
import { uploadFile } from "../../../../../firebaseConfig/FirebaseConfig";

const AddGallery2 = ({ setFormData, formData }) => {
	const [selectedImages, setSelectedImages] = useState([]);
	/* const [uploadingImages, setUploadingImages] = useState([]); */

	const handleImageSelect = (e) => {
		const newImage = e.target.files[0];

		if (newImage) {
			setSelectedImages((prevImages) => [
				...prevImages,
				{
					file: newImage,
					url: URL.createObjectURL(newImage),
					order: prevImages.length + 1,
				},
			]);
		}
	};

	/* 	const handleImageDelete = (index) => {
		setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
	}; */
	const handleImageDelete = (index) => {
		setSelectedImages((prevImages) =>
			prevImages
				.filter((_, i) => i !== index)
				.map((image, i) => ({ ...image, order: i + 1 }))
		);
	};

	/* const handleOrderChange = (index, newOrder) => {
		 	setSelectedImages((prevImages) => {
			const updatedImages = [...prevImages];
			updatedImages[index].order = newOrder;
			return updatedImages;
		}); 
		setSelectedImages((prevImages) => {
			const updatedImages = [...prevImages];

			// Evitar órdenes duplicados
			const isOrderTaken = updatedImages.some(
				(image) => image.order === newOrder
			);
			if (isOrderTaken) {
				// Puedes manejar esto de diferentes maneras, por ejemplo, intercambiando los órdenes.
				// O simplemente ignorando la acción y no cambiando el orden.
				return updatedImages;
			}

			updatedImages[index].order = newOrder;
			return updatedImages;
		});
	}; */

	const handleOrderChange = (index, newOrder) => {
		setSelectedImages((prevImages) => {
			const updatedImages = [...prevImages];

			// Obtener el orden anterior
			const prevOrder = updatedImages[index].order;

			// Verificar si newOrder es un número válido
			if (!isNaN(newOrder) && newOrder !== undefined) {
				// Verificar si el nuevo orden ya está en uso
				const isOrderTaken = updatedImages.some(
					(image) => image.order === newOrder
				);

				if (!isOrderTaken) {
					// No hay conflictos, actualizar el orden
					updatedImages[index].order = newOrder;
				}
			}

			// Actualizar el orden en la información guardada solo si es un número válido
			if (!isNaN(prevOrder) && prevOrder !== undefined) {
				setFormData((prevData) => {
					const updatedData = { ...prevData };

					// Actualizar el orden en la información guardada
					updatedData.gallery = updatedData.gallery.map((image) =>
						image.order === prevOrder
							? { ...image, order: updatedImages[index].order }
							: image
					);

					return updatedData;
				});
			}

			return updatedImages;
		});
	};

	console.log("SelectedImages es: ", selectedImages);
	/* console.log("FormData quiero ver que es: ", formData); */

	/* const uploadImages = async () => {
		setUploadingImages(selectedImages.map((img) => img.file.name));

		const uploadedImages = [];

		for (let { file } of selectedImages) {
			const url = await uploadFile(file);
			uploadedImages.push({ url });
		}

		setSelectedImages(uploadedImages);
		setUploadingImages([]);

		setFormData((prevData) => ({
			...prevData,
			gallery: [...prevData.gallery, ...uploadedImages],
		}));
	}; */

	console.log("formData es: ", formData);
	return (
		<div style={{ border: "solid blue", display: "flex", flexWrap: "wrap" }}>
			{selectedImages.map((image, index) => (
				<div key={index} style={{ border: "solid green" }}>
					<img src={image.url} alt={`Image ${index}`} width={100} />
					<input
						type="number"
						value={image.order}
						onChange={(e) => handleOrderChange(index, parseInt(e.target.value))}
					/>
					<button onClick={() => handleImageDelete(index)}>Eliminar</button>
				</div>
			))}
			<label htmlFor="imageInput">Seleccionar imagen</label>
			<input type="file" id="imageInput" onChange={handleImageSelect} />
			<hr />
			<br />
			<br />
			{/* 	<button onClick={uploadImages}>Guardar imágenes</button> */}
		</div>
	);
};

export default AddGallery2;
