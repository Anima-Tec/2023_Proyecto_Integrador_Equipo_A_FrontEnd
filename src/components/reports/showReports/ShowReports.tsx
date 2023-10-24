import React, { useContext, useEffect, useState } from "react";
import Report from "../../utils/report/Report";
import { SessionContext } from "../../../context/SessionContext";
import { useNavigate } from "react-router-dom";

const ShowReports = (props: any) => {
  const navigate = useNavigate();
  const communityId = parseInt(props.communityId);
  const [reports, setReports] = useState([]);

  const token = useContext(SessionContext);
  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch(
          `http://localhost:3000/communities/${communityId}/reports`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 500) {
            localStorage.setItem("token", "");
            navigate("/");
            console.error(
              "Error interno del servidor al obtener los informes (HTTP 500)"
            );
          } else {
            localStorage.setItem("token", "");
            navigate("/");
            throw new Error(
              `Error al obtener los informes: ${response.status}`
            );
          }
        }

        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Error al obtener los informes:", error);
      }
    }

    fetchReports();
  }, []);
  return (
    <>
      <div className="reports-container">
        {reports.map((report: any, index) => (
          <Report
            communityId={communityId}
            id={report.id}
            title={report.title}
            image={report.image}
            description={report.description}
            urgency={report.urgency}
            status={report.status}
            user={report.user}
          />
        ))}
      </div>
    </>
  );
};

export default ShowReports;
