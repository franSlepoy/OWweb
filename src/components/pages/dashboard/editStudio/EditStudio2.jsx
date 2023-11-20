import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
	db,
	storage,
	uploadFile,
} from "../../../../firebaseConfig/FirebaseConfig";
import { deleteObject, ref } from "firebase/storage";

const EditStudio2 = () => {
	const [textInitialState, setTextInitialState] = useState({});
	const [owTexts, setOwTexts] = useState({});

	//CAMBIAR LA IMAGEN DEL MOD 3 }
	const [urlModulo3, setUrlModulo3] = useState("");
	const [file, setFile] = useState({});
	const [isImageUpload, setIsImageUpload] = useState(false);
	const [loadingImage, setLoadingImage] = useState(false);

	useEffect(() => {
		let refCollection = collection(db, "studio");
		let refDoc = doc(refCollection, "d56Csm8bDohi6MVZ6nXA");
		let refDocOW = doc(refCollection, "ow");
		let refUrlMod3 = doc(refCollection, "studio_modulo3");
		getDoc(refDoc).then((res) => {
			setTextInitialState(res.data());
		});
		getDoc(refDocOW).then((res) => {
			setOwTexts(res.data());
		});
		getDoc(refUrlMod3).then((res) => {
			setUrlModulo3(res.data().url);
		});
	}, []);




	//Logica para cambiar la imagen mod3
	const handleImageUpload = async () => {
		try {
			setLoadingImage(true);
			let url = await uploadFile(file);
			setIsImageUpload(true);
			setUrlModulo3(url);
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

	const handleDelete = async (url) => {
		// Obtén la URL de la imagen

		const desertRef = ref(storage, url);
		await deleteObject(desertRef);

		/* 	if (field == "image_desktop" || field == "image_mobile") {
			setData({
				...data,
				[field]:
					"https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/defaults%2Fimagen_default.jfif?alt=media&token=773abf15-5965-4673-8724-ab92725f65a6&_gl=1*1whd9t7*_ga*MTY3NzI5MDE1OC4xNjg4NTgxNzg2*_ga_CW55HF8NVT*MTY5OTk4MjY0My45My4xLjE2OTk5ODI5NDUuNjAuMC4w.",
			});
		} else {
			setData({
				...data,
				[field]:
					"https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/defaults%2Fvideo_default.png?alt=media&token=c01a66e4-d620-4c77-8b21-d7ee7b36e12d&_gl=1*bcux98*_ga*MTY3NzI5MDE1OC4xNjg4NTgxNzg2*_ga_CW55HF8NVT*MTY5OTk4MjY0My45My4xLjE2OTk5ODI5NDguNTcuMC4w",
			});
		} 

		setIsImageUpload(true);*/
	};

	console.log(urlModulo3);
	return (
		<div>
			<h1>YOLANDAAAAAAAAAAAAAA</h1>
			<h3>Editar contenido</h3>
			<div>
				<p>Modulo 1</p>
				<textarea
					name=""
					id=""
					cols="30"
					rows="15"
					value={textInitialState?.textInitial_es}
					style={{ width: "100%" }}
				></textarea>
				<textarea
					name=""
					id=""
					cols="30"
					rows="15"
					value={textInitialState?.textInitial_en}
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
							value={owTexts.o_es_text}
						></textarea>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							value={owTexts.o_en_text}
						></textarea>
					</div>
					<div>
						<p>Wenzle</p>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							value={owTexts.w_es_text}
						></textarea>
						<textarea
							name=""
							id=""
							cols="30"
							rows="10"
							value={owTexts.w_en_text}
						></textarea>
					</div>
				</div>
			</div>
			<div>
				<p>Modulo 3</p>
				<img src={urlModulo3} style={{ width: 300 }} />
				<input
					type="file"
					onChange={(e) => setFile({ ...file, url: e.target.files[0] })}
				/>
				{file.url && (
					<button onClick={() => handleImageUpload()} type="button">
						Cargar imagen
					</button>
				)}
				{urlModulo3 && (
					<button onClick={() => handleDelete(urlModulo3)} type="button">
						Eliminar imagen
					</button>
				)}
			</div>
			<div>
				<p>Modulo 4</p>
			</div>
		</div>
	);
};

export default EditStudio2;
