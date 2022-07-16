const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
    },
    actions: {
      setChharacters: (characters) => {
        setStore({
          characters: characters,
        });
      },
    },
  };
};
export default getState;
