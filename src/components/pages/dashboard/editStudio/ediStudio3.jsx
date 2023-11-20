import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
	db,
	storage,
	uploadFile,
} from "../../../../firebaseConfig/FirebaseConfig";
import { deleteObject, ref } from "firebase/storage";
import imagen_default from "../../../../../public/imagenes/defaults/imagen_default.jfif";

// ESTOY USANDO UNA BASE DE DATOS DE PRUEBA --> LUEGO CAMBIAR LA DE TEST POR LA POSTA !!

const EditStudio3 = () => {
	const [data, setData] = useState({
		modulo1: {
			textInitial_es: "",
			textInitial_en: "",
		},
		modulo2: {
			o_es: "",
			o_en: "",
			w_es: "",
			w_en: "",
		},
		modulo3: {
			url: "",
		},
		modulo4: {
			col_izq_en: "",
			col_izq_es: "",
			col_der_en: "",
			col_der_es: "",
		},
	});
	const [file, setFile] = useState(data.modulo3.url);
	const [isImageUpload, setIsImageUpload] = useState(false);
	const [loadingImage, setLoadingImage] = useState(false);

	// Obtener datos iniciales de Firestore
	useEffect(() => {
		let refCollection = collection(db, "studio");
		const docRef = doc(refCollection, "modulos_studio_test");

		getDoc(docRef).then((doc) => {
			setData(doc.data());
		});
	}, []);

	console.log("esto es data: ", data);

	// Manejar cambios
	const handleChange = (field, value) => {
		const [module, subfield] = field.split(".");
		setData((prevData) => ({
			...prevData,
			[module]: {
				...prevData[module],
				[subfield]: value,
			},
		}));
	};

	// Guardar cambios
	const handleSave = async () => {
		let refCollection = collection(db, "studio");
		const docRef = doc(refCollection, "modulos_studio_test");
		await updateDoc(docRef, data);
	};

	const handleImageUpload = async (file, field) => {
		try {
			setLoadingImage(true);
			let url = await uploadFile(file);
			setIsImageUpload(true);
			const [module, subfield] = field.split(".");
			setData((prevData) => ({
				...prevData,
				[module]: {
					...prevData[module],
					[subfield]: url,
				},
			}));
			setLoadingImage(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (url) => {
		// Obtén la URL de la imagen

		const desertRef = ref(storage, url);
		await deleteObject(desertRef);
		setData({
			...data,
			modulo3: {
				url: "",
			},
		});

		setIsImageUpload(true);
	};

	return (
		<>
			<div>
				<h1>YOLANDAAAAAAAA 3333 </h1>
				<h3>Editar contenido</h3>
				<div>
					<p>Modulo 1</p>
					<textarea
						name=""
						id=""
						cols="30"
						rows="15"
						value={data.modulo1.textInitial_es}
						onChange={(e) =>
							handleChange("modulo1.textInitial_es", e.target.value)
						}
						style={{ width: "100%" }}
					></textarea>
					<textarea
						name=""
						id=""
						cols="30"
						rows="15"
						value={data.modulo1.textInitial_en}
						onChange={(e) =>
							handleChange("modulo1.textInitial_en", e.target.value)
						}
						style={{ width: "100%" }}
					></textarea>
				</div>
				<div>
					<p>Modulo 2</p>
					<div>
						<div>
							<p>Ordoñez</p>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={data.modulo2.o_es}
								onChange={(e) => handleChange("modulo2.o_es", e.target.value)}
							></textarea>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={data.modulo2.o_en}
								onChange={(e) => handleChange("modulo2.o_en", e.target.value)}
							></textarea>
						</div>
						<div>
							<p>Wenzle</p>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={data.modulo2.w_es}
								onChange={(e) => handleChange("modulo2.w_es", e.target.value)}
							></textarea>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={data.modulo2.w_en}
								onChange={(e) => handleChange("modulo2.w_en", e.target.value)}
							></textarea>
						</div>
					</div>
				</div>
				<div>
					<p>Modulo 3</p>
					<img
						src={data.modulo3.url ? data.modulo3.url : imagen_default}
						style={{ width: 300 }}
					/>
					<input
						type="file"
						onChange={(e) => setFile({ url: e.target.files[0] })}
					/>
					{file.url && (
						<button
							onClick={() => handleImageUpload(file.url, "modulo3.url")}
							type="button"
						>
							Cargar imagen
						</button>
					)}
					{loadingImage && <p>Cargando imagen...</p>}
					{isImageUpload && <p>¡Imagen subida!</p>}

					{data.modulo3.url && (
						<button
							onClick={() => handleDelete(data.modulo3.url)}
							type="button"
						>
							Eliminar imagen
						</button>
					)}
				</div>
				<div>
					<p>Modulo 4</p>
					<div>
						<div>
							<p>Columna izquierda</p>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={data.modulo4.col_izq_es}
								onChange={(e) =>
									handleChange("modulo4.col_izq_es", e.target.value)
								}
							></textarea>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={data.modulo4.col_izq_en}
								onChange={(e) =>
									handleChange("modulo4.col_izq_en", e.target.value)
								}
							></textarea>
						</div>
						<div>
							<p>Columna derecha</p>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={data.modulo4.col_der_es}
								onChange={(e) =>
									handleChange("modulo4.col_der_es", e.target.value)
								}
							></textarea>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								value={data.modulo4.col_der_en}
								onChange={(e) =>
									handleChange("modulo4.col_der_en", e.target.value)
								}
							></textarea>
						</div>
					</div>
				</div>
				<button onClick={handleSave}>Guardar Cambios</button>
			</div>
		</>
	);
};

export default EditStudio3;
