import { useState, useEffect } from "react";
import { uploadFile } from "../../../../../../firebaseConfig/FirebaseConfig";

const AddGalleryEdit = ({ project, setProject }) => {
	const [selectedImages, setSelectedImages] = useState(project.gallery);

	useEffect(() => {
		setSelectedImages(project.gallery);
	}, [project.gallery]);

	console.log("selectedImages es: ", selectedImages);
	console.log("project.gallery es: ", project.gallery);

	const handleImageSelect = (e) => {
		const newImage = e.target.files[0];

		if (newImage) {
			setSelectedImages((prevImages) => [
				...prevImages,
				{
					file: newImage,
					url: URL.createObjectURL(newImage),
					order: prevImages.length + 1,
					double: false,
					isNew: true,
				},
			]);
		}
	};

	const handleImageDelete = (index) => {
		setSelectedImages((prevImages) =>
			prevImages
				.filter((_, i) => i !== index)
				.map((image, i) => ({ ...image, order: i + 1 }))
		);
	};

	const handleOrderChange = (index, newOrder) => {
		setSelectedImages((prevImages) => {
			const updatedImages = [...prevImages];

			// Obtener el orden anterior
			/* 	const prevOrder = updatedImages[index].order; */

			// Verificar si newOrder es un número válido
			if (!isNaN(newOrder) && newOrder !== undefined) {
				// Verificar si el nuevo orden ya está en uso
				const isOrderTaken = updatedImages.some(
					(image, i) => i !== index && image.order == newOrder
				);

				if (!isOrderTaken) {
					// No hay conflictos, actualizar el orden
					updatedImages[index].order = newOrder;
				}
			}

			/* if (!isNaN(prevOrder) && prevOrder !== undefined) {
				setProject((prevData) => {
					const updatedData = { ...prevData };

					// Actualizar el orden en la información guardada
					updatedData.gallery = updatedData.gallery.map((image) =>
						image.order == prevOrder
							? { ...image, order: updatedImages[index].order }
							: image
					);

					return updatedData;
				});
			} */

			return updatedImages;
		});
	};

	const handleDoubleChange = (index) => {
		setSelectedImages((prevImages) => {
			const updatedImages = prevImages.map((image) => ({ ...image }));
			updatedImages[index].double = !updatedImages[index].double;
			return updatedImages;
		});
	};

	const uploadImages = async () => {
		// Crear un array para almacenar las URLs de las imágenes subidas
		const uploadedImages = [];

		// Recorrer todas las imágenes seleccionadas
		for (let image of selectedImages) {
			// Verificar si la imagen es nueva
			if (image.isNew) {
				// Subir la imagen a Firebase Storage y obtener la URL
				const url = await uploadFile(image.file);

				// Añadir la URL a la imagen correspondiente
				image.url = url;
			}

			// Añadir la imagen a las imágenes subidas
			uploadedImages.push(image);
		}

		// Actualizar el estado de formData con las imágenes subidas
		setProject((prevData) => ({
			...prevData,
			gallery: [...uploadedImages],
		}));
	};
	return (
		<div style={{ border: "solid blue", display: "flex", flexWrap: "wrap" }}>
			{selectedImages?.map((image, index) => (
				<div key={index} style={{ border: "solid green" }}>
					<img src={image.url} alt={`Image ${index}`} width={100} />
					<input
						type="number"
						value={image.order}
						onChange={(e) => handleOrderChange(index, parseInt(e.target.value))}
					/>
					<label>
						Double:
						<input
							type="checkbox"
							checked={image.double}
							onChange={() => handleDoubleChange(index)}
						/>
					</label>
					<button onClick={() => handleImageDelete(index)}>Eliminar</button>
				</div>
			))}
			<label htmlFor="imageInput">Seleccionar imagen</label>
			<input type="file" id="imageInput" onChange={handleImageSelect} />
			<hr />
			<br />
			<br />
			<button onClick={uploadImages}>Guardar imágenes</button>
		</div>
	);
};

export default AddGalleryEdit;
