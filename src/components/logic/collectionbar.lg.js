import { useProducts } from "../../context";
import { useHistory } from "react-router-dom";

export const useLogic = () => {
  const { products } = useProducts();
  const history = useHistory();
  const RedirectToCollection = (e) => {
    history.push(`/collections/${e.target.getAttribute("name")}`);
  };
  return { RedirectToCollection };
};
