import "./CreateReport.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../../context/SessionContext";

const CreateReport = (props: any) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedUrgency, setSelectedUrgency] = useState<number | null>(2);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageLink, setImageLink] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const token = useContext(SessionContext);
  const [labelBool, setLabelBool] = useState(false);
  const idCommunity = parseInt(props.communityId);

  useEffect(() => {
    fetch(`http://localhost:3000/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((response) => {
        if (response.status === 404) {
          localStorage.setItem("token", "");
          navigate("/");
        }
        if (response.status === 401) {
          localStorage.setItem("token", "");
          navigate("/");
        }

        return response.json();
      })
      .then((data) => {
        setUser(data.id);
      })
      .catch((error) => {
        console.error("Error al obtener la información del usuario:", error);
      });
  }, [navigate]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUploaded(false);
    setLabelBool(true);
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      const formData = new FormData();
      formData.append("image", file);
      const apikey = "ba4797a73c15b7a29f73a5098a7704fb";

      fetch(`https://api.imgbb.com/1/upload?key=${apikey}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setImageLink(data.data.url);
          setImageUploaded(true);
        })
        .catch((error) => {
          console.error("Error al subir la imagen a ImgBB:", error);
        });
    }
  };

  const handleUrgencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const urgencyValue = parseInt(e.target.value);
    setSelectedUrgency(urgencyValue);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const labelStyle: React.CSSProperties = {
    backgroundImage: "",
  };

  if (selectedImage) {
    labelStyle.backgroundImage = `url(${selectedImage})`;
  }

  const handleCreateReport = async () => {
    const urgencyText = {
      1: "Low",
      2: "Medium",
      3: "High",
      4: "Critical",
    };

    const requestBody = {
      title,
      description,
      urgency: urgencyText[selectedUrgency],
      image: imageLink,
      idUser: user,
      idCommunity: idCommunity,
    };

    try {
      const response = await fetch(`http://localhost:3000/reports`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(requestBody),
      });
      console.log(response.status);
      if (response.status === 201) {
        const newReport = await response.json();
        navigate(`/communities/${idCommunity}`);
      } else {
        console.error("Error al crear el informe");
      }
    } catch (error) {
      console.error("Error en la solicitud de creación de informe:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateReport();
  };

  return (
    <>
      <div className="content">
        <div className="report-create">
          <form className="report-create-form" onSubmit={handleSubmit}>
            <div className="report-create-top">
              <input
                type="text"
                placeholder="TITLE"
                className="report-create-title"
                required
                value={title}
                onChange={handleTitleChange}
              />
              <div className="radio-inputs">
                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    value="1"
                    onChange={handleUrgencyChange}
                  />
                  <span className="name" id="low-urg">
                    Low
                  </span>
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    onChange={handleUrgencyChange}
                    defaultChecked
                  />
                  <span className="name" id="medium-urg">
                    Medium
                  </span>
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    value="3"
                    onChange={handleUrgencyChange}
                  />
                  <span className="name" id="high-urg">
                    High
                  </span>
                </label>

                <label className="radio">
                  <input
                    type="radio"
                    name="radio"
                    value="4"
                    onChange={handleUrgencyChange}
                  />
                  <span className="name" id="critical-urg">
                    CRITICAL
                  </span>
                </label>
              </div>
            </div>
            <div className="report-create-mid">
              <textarea
                maxLength={500}
                placeholder="DESCRIPTION"
                className="report-create-description"
                value={description}
                required
                onChange={handleDescriptionChange}
              />
              <div className="report-create-line"></div>
              <label style={labelStyle} className="report-create-file-upload">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
                {!labelBool ? "UPLOAD AN IMAGE" : ""}
              </label>
            </div>
            <div className="report-create-bottom">
              <input
                type="submit"
                className="report-create-submit"
                value="Create"
                disabled={!imageUploaded}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateReport;
