import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../../../../context/SessionContext";
import { Link, useNavigate } from "react-router-dom";
import "./NewCommunity.css";

const NewCommunity: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const token = useContext(SessionContext);
  const [code, setCode] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "code") {
      setCode(value);
    }
  };

  const handleJoinCommunity = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/joinCommunityByCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({
            user_id: user.id,
            code,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al unirse a la comunidad");
      }
    } catch (error) {
      console.error("Error al unirse a la comunidad:", error);
    }
  };
  useEffect(() => {
    async function fetchUserByToken() {
      try {
        const response = await fetch("http://localhost:3000/user", {
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

  return (
    <>
      <div className="new-community-container">
        <Link to="/communities" className="new-community-link">
          <input type="button" value="<" className="new-community-back" />
        </Link>
        <div className="input-group">
          <input
            type="text"
            name="code"
            className="access-input"
            onChange={handleInputChange}
            required
          />
          <label className="user-label">code</label>
        </div>
      </div>
      <input
        type="submit"
        value="Add a community"
        className="add-community-button"
        onClick={handleJoinCommunity}
      />
    </>
  );
};

export default NewCommunity;
