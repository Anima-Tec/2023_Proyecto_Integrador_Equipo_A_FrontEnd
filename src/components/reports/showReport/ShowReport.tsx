import React, { useContext, useEffect, useState } from "react";
import "./ShowReport.css";
import { SessionContext } from "../../../context/SessionContext";
import { useNavigate } from "react-router-dom";

const ShowReport = (props: any) => {
  const [report, setReport] = useState();
  const [selectedStatus, setSelectedStatus] = useState<number | null>(1);
  const [formattedDate, setFormattedDate] = useState("");
  const idReport = props.idReport;
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const token = useContext(SessionContext);
  const [userRole, setUserRole] = useState<string | null>(null); // Nuevo estado

  useEffect(() => {
    async function fetchUserByToken() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener el usuario");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    }

    if (token) {
      fetchUserByToken();
    } else {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    async function fetchUserRole() {
      try {
        if (token && user && report) {
          const response = await fetch(
            `http://localhost:3000/users/${user.id}/role/${report.idCommunity}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                authorization: token,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Error al obtener el usuario");
          }

          const userData = await response.json();
          setUserRole(userData.role);
        }
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    }

    if (user && report) {
      console.log(user.id);
      console.log(report.idCommunity);
      fetchUserRole();
    }
  }, [user, report, token]);

  useEffect(() => {
    async function fetchReport() {
      try {
        const response = await fetch(
          `http://localhost:3000/reports/${idReport}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        );

        if (!response.ok) {
          console.error("Error al obtener el informe.");
          return;
        }

        const data = await response.json();
        setReport(data);
        const dateObject = new Date(data.creationDate);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        setFormattedDate(`${day}/${month}/${year}`);
      } catch (error) {
        console.error("Error al obtener el informe:", error);
      }
    }

    fetchReport();
  }, [props.id]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const statusValue = parseInt(e.target.value);
    setSelectedStatus(statusValue);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdateReport();
  };
  const handleUpdateReport = async () => {
    const statusText = {
      1: "New",
      2: "InProgress",
      3: "InValidation",
      4: "Closed",
    };

    try {
      if (selectedStatus === null) {
        console.error("Debes seleccionar un estado.");
        return;
      }
      const response = await fetch(
        `http://localhost:3000/reports/${idReport}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({ status: statusText[selectedStatus] }),
        }
      );

      if (!response.ok) {
        console.error("Error al actualizar el estado del informe.");
        return;
      }
    } catch (error) {
      console.error("Error al actualizar el estado del informe:", error);
    }
  };
  return (
    <div className="content">
      <div className="report-show">
        {report ? (
          <>
            <form className="report-create-form" onSubmit={handleSubmit}>
              <div className="report-show-top">
                <h1 className="report-show-title">{report.title}</h1>
                <p className="report-show-creation">{formattedDate}</p>
              </div>
              <div className="report-show-mid">
                <p className="report-show-description">{report.description}</p>
                <div className="report-show-line"></div>
                <img
                  src={report.image}
                  className="report-show-image"
                  alt="Report Image"
                />
              </div>
              {userRole === "Tecnico" && userRole === "Supervisor" && (
                <div className="report-show-bottom">
                  <div className="radio-show-inputs">
                    <label className="show-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="1"
                        onChange={handleStatusChange}
                      />
                      <span className="radio-show-status-name" id="new-status">
                        New
                      </span>
                    </label>
                    <label className="show-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="2"
                        onChange={handleStatusChange}
                        defaultChecked
                      />
                      <span
                        className="radio-show-status-name"
                        id="inProgress-status"
                      >
                        In Progress
                      </span>
                    </label>
                    <label className="show-radio">
                      <input
                        type="radio"
                        name="radio"
                        value="3"
                        onChange={handleStatusChange}
                      />
                      <span
                        className="radio-show-status-name"
                        id="inValidation-status"
                      >
                        In Validation
                      </span>
                    </label>
                    {userRole === "Supervisor" && (
                      <label className="show-radio">
                        <input
                          type="radio"
                          name="radio"
                          value="4"
                          onChange={handleStatusChange}
                        />
                        <span
                          className="radio-show-status-name"
                          id="closed-status"
                        >
                          Closed
                        </span>
                      </label>
                    )}
                  </div>
                  <input
                    type="submit"
                    className="report-show-submit"
                    value="Update"
                  />
                </div>
              )}
            </form>
          </>
        ) : (
          <p>Cargando informe...</p>
        )}
      </div>
    </div>
  );
};

export default ShowReport;
