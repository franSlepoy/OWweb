import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig/FirebaseConfig";
export const generarDocumentos = () => {
  let refCollection = collection(db, "projects_test");

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
          url: "",
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
    {
      name: "carmin",
      image_ppal:
        "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FGrilla%20ordonez%20wenzke%20ordo%C3%B1ez.jpg?alt=media&token=98742385-bcd9-4140-97d4-c2dbfb9e1243",
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
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%201.jpg?alt=media&token=4fa515ec-d036-4216-a1dd-b1f69c84155a",
          double: false,
          order: 1,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%202.jpg?alt=media&token=f3154c58-bf1d-441a-bf59-8666862279bc",
          double: false,
          order: 2,
          isNew: false,
        },
        {
url:"https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%203.jpg?alt=media&token=78f8fa17-0c5b-4b83-ba63-6167dc87580c",          
double: false,
          order: 3,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%204.jpg?alt=media&token=71cd9516-0e90-4d45-903a-aa52dff8ebaf",
          double: false,
          order: 4,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%205.jpg?alt=media&token=ade93bc0-7574-44a2-accd-d6156363923a",
          double: false,
          order: 5,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%207.jpg?alt=media&token=08e9ce51-7955-4172-b3bf-4c18ea245b1a",
          double: false,
          order: 6,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%2010.jpg?alt=media&token=dfa9172b-bc86-4260-9a72-24026fa32510",
          double: false,
          order: 7,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%2011.jpg?alt=media&token=0adc2aab-83bc-4c59-957b-aed4020c55ec",
          double: false,
          order: 8,
          isNew: false,
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ow-backend.appspot.com/o/projects%2Fcarmin%2FORDONEZWENZKE%2014.jpg?alt=media&token=e0b15164-9de4-47bf-9ef7-c570ec057d50",
          double: false,
          order: 9,
          isNew: false,
        },
      ],
      visible: true,
    },
  ];

  products.forEach((e) => addDoc(refCollection, e));
};
