import React, { useContext, useEffect } from "react";
import Card from "../../../components/Card";
import { Context } from "../../../store/context";
import styles from "./list.module.css";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.characters.lenght) {
      actions.setCharacters();
    }
  }, [actions, store.characters.lenght]);

  return (
    <div className={styles.container}>
      {store.characters.map((character) => {
        return (
          <Card
            key={character.id}
            img={character.image}
            text={character.name}
            action={() => navigate(`/characters/${character.id}`)}
          />
        );
      })}
    </div>
  );
};

export default List;
