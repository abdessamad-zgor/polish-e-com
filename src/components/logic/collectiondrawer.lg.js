import { useHistory } from "react-router-dom";

export const useLogic = (name) => {
  const history = useHistory();
  const RedirectToCollection = (e) => {
    history.push(`/collections/${e.target.getAttribute("name")}`);
  };
  const isSelected = () => {
    console.log(document.getElementsByName(name));

    if (document.getElementsByName(name).name == name) {
      return true;
    } else {
      return false;
    }
  };
  return { RedirectToCollection, isSelected };
};
