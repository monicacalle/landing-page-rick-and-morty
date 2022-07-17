import React, { useContext, useEffect } from "react";
import Card from "../../../components/Card";
import { Context } from "../../../store/context";
import styles from "./list.module.css";

const List = () => {
  const { store, actions } = useContext(Context);

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
          />
        );
      })}
    </div>
  );
};

export default List;
