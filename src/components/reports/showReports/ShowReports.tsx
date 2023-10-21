import React, { useEffect, useState } from "react";
import Report from "../../utils/report/Report";
const CreateReport = (props: any) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch("http://localhost:3000/reports");

        if (!response.ok) {
          if (response.status === 500) {
            console.error(
              "Error interno del servidor al obtener los informes (HTTP 500)"
            );
          } else {
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

export default CreateReport;
