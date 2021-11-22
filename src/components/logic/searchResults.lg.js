import { useEffect, useState } from "react";
import { useProducts } from "../../context";

export const searchResultsLogic = function (filter) {
  const [results, setResults] = useState([]);
  let [isActive, setIsActive] = useState(false);
  const { products } = useProducts();
  useEffect(() => {
    //add category based search

    setResults(
      products.all.filter((product) =>
        product.title.toLowerCase().includes(filter)
      )
    );

    setIsActive(filter != "");
  }, [filter]);

  return { results, isActive };
};
