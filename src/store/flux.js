import config from "../config/constants";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      character: null,
    },
    actions: {
      setCharacters: async () => {
        const response = await fetch(`${config.ENDPOINT}/character`);
        const data = await response.json();
        setStore({
          characters: data.results,
        });
      },
      setCharacter: async (id) => {
        const response = await fetch(`${config.ENDPOINT}/character/${id}`);
        const data = await response.json();
        console.log(data);
        setStore({
          character: data,
        });
      },
    },
  };
};
export default getState;
