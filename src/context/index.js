import { createContext, useEffect, useState } from "react";

export const typeError = [
  "valueMissing",
  "typeMismatch",
  "tooShort",
  "patternMismatch",
];

export const messages = {
  titulo: {
    valueMissing: "Campo titulo no puede estar vacío",
    tooShort: "El titulo tiene que tener al menos de 5 caracteres",
  },
  categoria: {
    valueMissing: "Selecciona una Categoria",
  },
  imagen: {
    valueMissing: "Campo imagen no puede estar vacío",
    typeMismatch: "Imagen tiene que ser una URL valida",
    patternMismatch:
      "La Url de la imagen debe povenir de Youtube",
  },
  video: {
    valueMissing: "Campo video no puede estar vacío",
    typeMismatch: "Video tiene que ser una URL valida",
    patternMismatch:
      "Url del video de Youtube",
  },
  descripcion: {
    valueMissing: "Campo descripcion no puede estar vacío",
    tooShort: "La descripcion tiene que ser al menos de 4 caracteres"
  },
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [videoLink, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const [errorMessages, setErrorMessages] = useState({});

  // llamado Categorias desde API
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Albert00012/aluraflixmax__api/categorias"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // llamado videos desde API
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Albert00012/aluraflixmax_api/videos"
    )
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  const deleteVideo = (id) => {
    fetch(
      `https://my-json-server.typicode.com/Albert00012/aluraflixmax_api/videos/${id}`,
      { method: "DELETE" }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al eliminar");
        }

        return res.json();
      })
      .then(() => {
        const newVideos = videos.filter((video) => video.id !== id);

        setVideos(newVideos);
        setPopup({
          show: true,
          message: "Eliminado con Exito",
          type: "ciruclo",
        });

        setTimeout(() => {
          setPopup({ show: false, message: "", type: "" });
        }, 3000);
      })
      .catch((err) => {
        console.error("Error: ", err);
        setPopup({
          show: true,
          message: `Problema al eliminar el video: ${err}`,
          type: "error",
        });

        setTimeout(() => {
          setPopup({ show: false, message: "", type: "" });
        }, 3000);
      });
  };

  const updateVideoInfo = (data) => {
    const { title, category, image, videoLink, description, id } = data;

    const updatedVideo = {
      titulo: title,
      Categoria: category,
      linkImagenVideo: image,
      linkVideo: videoLink,
      descripcion: description,
    };

    fetch(
      `https://my-json-server.typicode.com/Albert00012/aluraflixmax_api/videos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedVideo),
      }
    )
      .then((result) => result.json())
      .then((updatedVideoFromServer) => {
        const newInfo = videos.map((video) => {
          if (video.id === id) {
            return updatedVideoFromServer;
          }

          return video;
        });

        setVideos(newInfo);
        setPopup({
          show: true,
          message: "Actualizado con Exito",
          type: "ciruclo",
        });

        setTimeout(() => {
          setPopup({ show: false, message: "", type: "" });
        }, 3000);
      })
      .catch((err) => {
        console.error("Error: ", err);
        setPopup({
          show: true,
          message: `Problema al Actualizar el video: ${err}`,
          type: "error",
        });

        setTimeout(() => {
          setPopup({ show: false, message: "", type: "" });
        }, 3000);
      });
  };

  const createNewVideo = (data) => {
    let newId = 1;

    while (videos.some((video) => newId === video.id)) {
      newId++;
    }

    const infoEnviar = {
      Categoria: data.category,
      descripcion: data.description,
      linkVideo: data.videoLink,
      linkImagenVideo: data.image,
      titulo: data.title,
      id: newId,
    };

    fetch(
      `https://my-json-server.typicode.com/Albert00012/aluraflixmax_api/videos`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(infoEnviar),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al crear el video");
        }

        return res.json();
      })
      .then((newVideo) => {
        setVideos([...videos, newVideo]);
        setPopup({
          show: true,
          message: `Se agrego con exito el video: ${newVideo.titulo}`,
          type: "ciruclo",
        });

        setTimeout(() => {
          setPopup({ show: false, message: "", type: "" });
        }, 3000);
      })
      .catch((err) => {
        console.error("Error:", err);
        setPopup({
          show: true,
          message: `Hubo un Problema al Agregar el Video: ${err}`,
          type: "error",
        });

        setTimeout(() => {
          setPopup({ show: false, message: "", type: "" });
        }, 3000);
      });
  };

  // verificacion de inputs
  const clearInputs = () => {
    setTitle("");
    setCategory("");
    setImage("");
    setVideo("");
    setDescription("");
    setIsFormValid(false);
  };

  const verifyField = (field) => {
    let message = "";

    field.setCustomValidity("");

    typeError.forEach((error) => {
      if (field.validity[error]) {
        message = messages[field.name][error] || "Campo invalido";
      }
    });

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [field.name]: message,
    }));
  };

  const [formFields, setFormFields] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const allValid = Object.values(formFields).every(
      (field) => field.validity.valid
    );
    setIsFormValid(allValid);
  }, [formFields]);

  const handleInputChange = (name, value) => {
    switch (name) {
      case "titulo":
        setTitle(value);
        setFormFields({
          ...formFields,
          [name]: {
            ...formFields[name],
            value: value,
            validity: document.querySelector(`[name=${name}]`).validity,
          },
        });
        break;
      case "categoria":
        setCategory(value);
        setFormFields({
          ...formFields,
          [name]: {
            ...formFields[name],
            value: value,
            validity: document.querySelector(`[name=${name}]`).validity,
          },
        });
        break;
      case "imagen":
        setImage(value);
        setFormFields({
          ...formFields,
          [name]: {
            ...formFields[name],
            value: value,
            validity: document.querySelector(`[name=${name}]`).validity,
          },
        });
        break;
      case "video":
        setVideo(value);
        setFormFields({
          ...formFields,
          [name]: {
            ...formFields[name],
            value: value,
            validity: document.querySelector(`[name=${name}]`).validity,
          },
        });
        break;
      case "descripcion":
        setDescription(value);
        setFormFields({
          ...formFields,
          [name]: {
            ...formFields[name],
            value: value,
            validity: document.querySelector(`[name=${name}]`).validity,
          },
        });
        break;

      default:
        break;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        title,
        image,
        category,
        videoLink,
        description,
        videos,
        categories,
        selectedVideo,
        popup,
        errorMessages,
        isFormValid,
        handleInputChange,
        setSelectedVideo,
        setCategory,
        deleteVideo,
        updateVideoInfo,
        createNewVideo,
        clearInputs,
        verifyField,
        setErrorMessages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;