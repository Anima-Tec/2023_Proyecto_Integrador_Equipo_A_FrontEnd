import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
import LeftContainer from "../../components/left-container/LeftContainer";
import "./Reports.css";
import ShowReports from "../../components/reports/showReports/ShowReports";
import CreateReport from "../../components/reports/createReport/CreateReport";

interface ElementosComunesProps {
  children?: React.ReactNode;
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
          <LeftContainer valor="Reports" />
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
function Reports(props: ReportsProps) {
  const { category } = props;

  switch (category) {
    case "show":
      return (
        <ElementosComunes>
          <ShowReports />
        </ElementosComunes>
      );
    case "new":
      return (
        <ElementosComunes>
          <CreateReport />
        </ElementosComunes>
      );
  }
}

export default Reports;
