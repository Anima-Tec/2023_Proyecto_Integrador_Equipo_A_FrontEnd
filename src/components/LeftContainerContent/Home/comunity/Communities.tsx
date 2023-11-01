import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../../../context/SessionContext";
import { Link, useNavigate } from "react-router-dom";
import "./Communities.css";
import CommunityBackgroundDef from "./../../../../assets/communitybackground.jpg";
import Community from "../../../utils/community/Community";
interface Community {
  id: number;
  name: string;
  image: string;
  domain: string;
  code: string;
}

const Communities: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [communities, setCommunities] = useState<Community[]>([]);
  const token = useContext(SessionContext);

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

  useEffect(() => {
    async function fetchUserCommunities() {
      if (user) {
        try {
          const response = await fetch(
            `http://localhost:3000/user/${user.id}/communities`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                authorization: token,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Error al obtener las comunidades del usuario");
          }

          const communityData = await response.json();
          setCommunities(communityData);
        } catch (error) {
          console.error("Error al obtener las comunidades del usuario:", error);
        }
      }
    }

    if (user) {
      fetchUserCommunities();
    }
  }, [user, token, navigate]);

  return (
    <>
      <div className="communities">
        <div className="communities-container">
          <h1 className="communities-title">Communities:</h1>
          {communities.map((community) => (
            <Community
              name={community.name}
              image={community.image || CommunityBackgroundDef}
              communityId={community.id}
              className="community"
            />
          ))}
        </div>
        <Link to={`/communities/add`}>
          <input
            type="button"
            value="Add a community"
            className="add-community-button"
          />
        </Link>
      </div>
    </>
  );
};

export default Communities;
