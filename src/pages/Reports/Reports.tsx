import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React, { useContext, useEffect, useState } from "react";
import LeftContainer from "../../components/left-container/LeftContainer";
import "./Reports.css";
import ShowReports from "../../components/reports/showReports/ShowReports";
import CreateReport from "../../components/reports/createReport/CreateReport";
import { useParams } from "react-router-dom";
import ShowReport from "../../components/reports/showReport/ShowReport";
import { SessionContext } from "../../context/SessionContext";

interface ElementosComunesProps {
  children?: React.ReactNode;
  communityId?: String;
}

interface ReportsProps {
  category: string;
}

function ElementosComunes(props: ElementosComunesProps) {
  return (
    <>
      <div className="reports">
        <Header isWide={false} page="Reports" />
        <div className="reports-content">
          <LeftContainer valor="Reports" communityId={props.communityId} />
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
function Reports(props: ReportsProps) {
  const { category } = props;
  const [report, setReport] = useState();
  const { id } = useParams();
  const token = useContext(SessionContext);
  useEffect(() => {
    async function fetchReport() {
      try {
        console.log(token);
        const response = await fetch(`http://localhost:3000/reports/1`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });

        if (!response.ok) {
          console.error("Error al obtener el informe.");
          return;
        }

        const data = await response.json();
        setReport(data);
      } catch (error) {
        console.error("Error al obtener el informe:", error);
      }
    }
    fetchReport();
  }, [id, token]);
  switch (category) {
    case "showAll":
      return (
        <ElementosComunes communityId={id}>
          <ShowReports communityId={id} />
        </ElementosComunes>
      );
    case "new":
      return (
        <ElementosComunes communityId={id}>
          <CreateReport communityId={id} />
        </ElementosComunes>
      );
    case "show":
      return (
        <>
          {console.log(report)}
          <ElementosComunes communityId={"1"}>
            <ShowReport idReport={id} />
          </ElementosComunes>
        </>
      );
  }
}

export default Reports;
