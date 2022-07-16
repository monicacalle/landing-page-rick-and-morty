import React from "react";
import Card from "../../components/Card";
import rick_morty from "../../images/rick_morty.jpg";
import config from "../../config/constants";

const Home = () => {
  const getCharacters = async () => {
    const response = await fetch(`${config.ENDPOINT}/character`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <Card img={rick_morty} text={"click for more"} action={getCharacters} />
    </div>
  );
};

export default Home;
