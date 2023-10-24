import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
import LeftContainer from "../../components/left-container/LeftContainer";
import "./Reports.css";
import ShowReports from "../../components/reports/showReports/ShowReports";
import CreateReport from "../../components/reports/createReport/CreateReport";
import { useParams } from "react-router-dom";
import ShowReport from "../../components/reports/showReport/ShowReport";

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
  const { id } = useParams();
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
        <ElementosComunes communityId={id}>
          <ShowReport idReport={id} />
        </ElementosComunes>
      );
  }
}

export default Reports;
