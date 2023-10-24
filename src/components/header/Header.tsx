import React, { useContext } from "react";
import Button from "../utils/button/PageNavButton/PageNavButton";
import WideLogo from "../utils/logo/wide/WideLogo";
import "./Header.css";
import NarrowLogo from "../utils/logo/narrow/NarrowLogo";
import { SessionContext } from "../../context/SessionContext";
import { Link } from "react-router-dom";

interface ElementosComunesProps {
  isWide: boolean;
  children?: React.ReactNode;
}

interface HeaderProps {
  page: string;
  isWide: boolean;
}

function ElementosComunes(props: ElementosComunesProps) {
  const { children, isWide } = props;
  return (
    <header>
      <div className="header-logo-container">
        {isWide ? <WideLogo /> : <NarrowLogo />}
      </div>
      <div className="header-container">{children}</div>
    </header>
  );
}

const Header = (props: HeaderProps) => {
  const { page, isWide } = props;
  const token = useContext(SessionContext);

  const renderButtons = (activePage: string) => {
    return (
      <div className="header-links">
        <Button
          page="/communities"
          value="Home"
          className={page === "Home" ? "active-page" : "nav-button"}
        />
        <Button
          page="/aboutus"
          value="About us"
          className={activePage === "About us" ? "active-page" : "nav-button"}
        />
      </div>
    );
  };

  switch (page) {
    case "Home":
      return (
        <ElementosComunes isWide={isWide}>
          {renderButtons("Home")}
        </ElementosComunes>
      );
    case "About us":
      return (
        <ElementosComunes isWide={isWide}>
          {renderButtons("About us")}
          {!token && (
            <>
              <div className="linea"></div>
              <Link to="/">
                <input
                  type="submit"
                  value="Login"
                  className="login-header-button"
                />
              </Link>
            </>
          )}
        </ElementosComunes>
      );
    case "Reports":
      return (
        <ElementosComunes isWide={isWide}>
          {renderButtons("Reports")}
        </ElementosComunes>
      );
    default:
      return null; // Handle unknown page gracefully
  }
};

export default Header;
