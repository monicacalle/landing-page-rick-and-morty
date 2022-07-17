import React from "react";
import Card from "../../components/Card";
import rick_morty from "../../images/rick_morty.jpg";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const getCharacters = async () => {
    navigate("/characters");
  };

  return (
    <div>
      <Card img={rick_morty} text={"click for more"} action={getCharacters} />
    </div>
  );
};

export default Home;
