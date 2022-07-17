import config from "../config/constants";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
    },
    actions: {
      setCharacters: async () => {
        const response = await fetch(`${config.ENDPOINT}/character`);
        const data = await response.json();
        setStore({
          characters: data.results,
        });
      },
    },
  };
};
export default getState;
