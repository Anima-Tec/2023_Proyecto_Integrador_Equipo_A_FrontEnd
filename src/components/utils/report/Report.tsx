import React from "react";
// @ts-ignore
import imagenRemitenteTest from "../../../assets/imagen-remitente.jpeg";
import "./Report.css";
import { Link } from "react-router-dom";
function UrgencyLevel(props: any) {
  const prioridad = props.prioridad;
  switch (prioridad) {
    case "Low":
      return (
        <div className="low-urgency-box">
          <p className="urgency-span">Low</p>
        </div>
      );
    case "Medium":
      return (
        <div className="medium-urgency-box">
          <p className="urgency-span">Medium</p>
        </div>
      );
    case "High":
      return (
        <div className="high-urgency-box">
          <p className="urgency-span">High</p>
        </div>
      );
    case "Critical":
      return (
        <div className="critical-urgency-box">
          <p className="urgency-span">CRITICAL</p>
        </div>
      );
  }
}

const Report = (props: any) => {
  const urgency = props.urgency;
  const title = props.title;
  const description = props.description;
  const user = props.user;
  const image = props.image;
  const id = props.id;
  return (
    <Link to={`/communities/report/${id}`}>
      <div className="card">
        <div className="img">
          <div className="remitente">
            <img src={imagenRemitenteTest} alt="Imagen del remitente" />
            <p>{user}</p>
          </div>
          <img src={image} alt="Imagen del reporte" />
        </div>

        <div className="card-content">
          <div className="card-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <UrgencyLevel prioridad={urgency} />
        </div>
      </div>
    </Link>
  );
};

export default Report;
