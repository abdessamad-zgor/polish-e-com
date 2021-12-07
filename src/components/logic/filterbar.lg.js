import { useState } from "react";
import { useProducts } from "../../context";

// set a state for filter

//handle changes for each filter

// on Click SetFilters
export const useLogic = () => {
  const { productDispatch } = useProducts();

  const [filters, setFilters] = useState({
    categories: [],
    title: "",
    price: 0,
    attributes: [],
  });

  const handleChange = (e) => {
    if (typeof filters[e.target.name] == typeof []) {
      setFilters({
        ...filters,
        [e.target.name]: [...filters[e.target.name], e.target.value],
      });
    } else {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value,
      });
    }

    console.log(filters);
  };

  const setFiltersInReducer = () => {
    productDispatch({ type: "SET_FILTERS", payload: filters });
  };

  return { filters, handleChange, setFiltersInReducer };
};
