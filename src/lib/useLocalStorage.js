import { useEffect } from "react";

const useLocalStorage = function (state, stateName, setState) {
  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem(stateName)));
  }, []);
  useEffect(() => {
    window.localStorage.setItem(stateName, state);
  }, [state]);
};

export default useLocalStorage;
