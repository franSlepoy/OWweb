import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useEffect } from "react";
import { useState } from "react";
import {
	db,
	storage,
	uploadFile,
} from "../../../../firebaseConfig/FirebaseConfig";
import imagen_default from "../../../../../public/imagenes/defaults/imagen_default.jfif";
import video_default from "../../../../../public/imagenes/defaults/video_default.png";

const EditInicio = () => {
	const [data, setData] = useState({});
	const [files, setFiles] = useState({});
	const [isImageUpload, setIsImageUpload] = useState(false);
	const [loadingImage, setLoadingImage] = useState(false);

	useEffect(() => {
		let refCollection = collection(db, "inicio");
		let refDoc = doc(refCollection, "D8eDUtoTEElGXUAON9dg");
		getDoc(refDoc).then((res) => {
			setData(res.data());
		});
	}, []);

	const handleImageUpload = async (field) => {
		try {
			setLoadingImage(true);
			let url = await uploadFile(files[field]);
			setIsImageUpload(true);
			setData({ ...data, [field]: url });
			setLoadingImage(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let refCollection = collection(db, "inicio");
		let refDoc = doc(refCollection, "D8eDUtoTEElGXUAON9dg");
		await updateDoc(refDoc, data);
	};

	const handleDelete = async (field) => {
		// Obtén la URL de la imagen

		const url = data[field];
		const desertRef = ref(storage, url);
		await deleteObject(desertRef);

		if (field == "image_desktop" || field == "image_mobile") {
			setData({
				...data,
				[field]: "",
			});
		} else {
			setData({
				...data,
				[field]: "",
			});
		}

		setIsImageUpload(true);
	};

	console.log(data);

	return (
		<div>
			<h2>Estudio</h2>
			<p>Inicio</p>

			<div>
				<p>Imagen</p>

				<div>
					<p>Escritorio</p>
					<img
						src={data?.image_desktop ? data.image_desktop : imagen_default}
						width={200}
					/>
					<input
						type="file"
						onChange={(e) =>
							setFiles({ ...files, image_desktop: e.target.files[0] })
						}
					/>
					{files.image_desktop && (
						<button
							onClick={() => handleImageUpload("image_desktop")}
							type="button"
						>
							Cargar imagen
						</button>
					)}
					{data.image_desktop && (
						<button onClick={() => handleDelete("image_desktop")} type="button">
							Eliminar imagen
						</button>
					)}

					{loadingImage && <h5>Cargando...</h5>}
				</div>
				<div>
					<p>Mobile</p>
					<img
						src={data?.image_mobile ? data.image_mobile : imagen_default}
						width={200}
					/>
					<input
						type="file"
						onChange={(e) =>
							setFiles({ ...files, image_mobile: e.target.files[0] })
						}
					/>
					{files.image_mobile && (
						<button
							onClick={() => handleImageUpload("image_mobile")}
							type="button"
						>
							Cargar imagen
						</button>
					)}
					{data.image_mobile && (
						<button onClick={() => handleDelete("image_mobile")} type="button">
							Eliminar imagen
						</button>
					)}

					{loadingImage && <h5>Cargando...</h5>}
				</div>
			</div>
			<div>
				<p>Video</p>

				<div>
					<p>Escritorio</p>
					<img
						src={data?.video_desktop ? data.video_desktop : video_default}
						width={200}
					/>
					<input
						type="file"
						onChange={(e) =>
							setFiles({ ...files, video_desktop: e.target.files[0] })
						}
					/>
					{files.video_desktop && (
						<button
							onClick={() => handleImageUpload("video_desktop")}
							type="button"
						>
							Cargar video
						</button>
					)}
					{data.video_desktop && (
						<button onClick={() => handleDelete("video_desktop")} type="button">
							Eliminar video
						</button>
					)}

					{loadingImage && <h5>Cargando...</h5>}
				</div>
				<div>
					<p>Mobile</p>
					<img
						src={data?.video_mobile ? data.video_mobile : video_default}
						width={200}
					/>
					<input
						type="file"
						onChange={(e) =>
							setFiles({ ...files, video_mobile: e.target.files[0] })
						}
					/>
					{files.video_mobile && (
						<button
							onClick={() => handleImageUpload("video_mobile")}
							type="button"
						>
							Cargar video
						</button>
					)}
					{data.video_mobile && (
						<button onClick={() => handleDelete("video_mobile")} type="button">
							Eliminar video
						</button>
					)}

					{loadingImage && <h5>Cargando...</h5>}
				</div>
			</div>
			<button onClick={handleSubmit} type="submit" disabled={!isImageUpload}>
				Guardar cambios
			</button>
		</div>
	);
};

export default EditInicio;
