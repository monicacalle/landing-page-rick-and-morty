import React, { useContext } from "react";
import Card from "../../components/Card";
import rick_morty from "../../images/rick_morty.jpg";
import config from "../../config/constants";
import { Context } from "../../store/context";

const Home = () => {
  const { actions } = useContext(Context);
  const getCharacters = async () => {
    const response = await fetch(`${config.ENDPOINT}/character`);
    const data = await response.json();

    actions.setChharacters();
  };

  return (
    <div>
      <Card img={rick_morty} text={"click for more"} action={getCharacters} />
    </div>
  );
};

export default Home;
