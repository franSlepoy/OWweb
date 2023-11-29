import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const generarDocumentos = () => {
  let refCollection = collection(db, "products");

  let products = [
    {
      name: "paroissan",
      image_ppal:
        "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fparoisian%2FGrilla%20ordonezwenzke.jpg?alt=media&token=e0a145ae-c4be-41b2-8207-2f78d6544428",
      memories: {
        memorie_en: "nada",
        memorie_es: "nothing al reves",
      },
      slides: {
        slides1_en: "slide1 english",
        slides1_es: "slide1 espa",
        slides2_es: "slide2 esp",
        slides2_en: "slide2_en",
      },
      gallery: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fparoisian%2Fhabitacion%20lulu%201%20ordonezwenzke.jpg?alt=media&token=62b84995-f53b-45c7-ae5d-434aebc11a0d",
          double: false,
          order: 1,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fparoisian%2Fcocina%20lulu%202%20ordonezwenzke.jpg?alt=media&token=3182df90-4346-423a-9f0c-308fd5651419",
          double: false,
          order: 2,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fparoisian%2Fcocina%20lulu%201%20ordonezwenzke.jpg?alt=media&token=cc245480-298d-4288-ba9f-2418ea6b9445",
          double: false,
          order: 3,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fparoisian%2Fbiblioa%20lulu%202%20ordonezwenzke.jpg?alt=media&token=3c5320ab-b2b3-437a-a978-88935827b1d3",
          double: false,
          order: 4,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fparoisian%2Fbiblioa%20lulu%201%20ordonezwenzke.jpg?alt=media&token=779d75cf-891c-40df-b78c-715487e88baf",
          double: false,
          order: 5,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fparoisian%2FESCALERA%20lulu%202%20ordonezwenzke.jpg?alt=media&token=b053f62b-904f-4701-aee8-7e45791b1de2",
          double: false,
          order: 6,
          isNew: false,
        },
      ],
      visible: true,
    },
  ];

  products.forEach((e) => addDoc(refCollection, e));
};
