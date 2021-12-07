import React from "react";
import styles from "../../styles/componentStyles/filterbar.module";

//import icon
import { Filtericon } from "../icons";

//import logic

import { useLogic } from "../logic/filterbar.lg";

function Filterbar() {
  const { filters, handleChange, setFiltersInReducer } = useLogic();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.range}>
          <label className="small grey">Price</label>
          <input
            onChange={handleChange}
            name="price"
            type="range"
            min="0"
            max="1000"
            step="10"
          ></input>
        </div>
        <div className={styles.title}>
          <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            placeholder=" Title"
            name="title"
            id=""
          />
        </div>
        <div className={styles.select}>
          <input
            onChange={handleChange}
            list="categories"
            name="categories"
            id="category-choice"
            placeholder="Select Categories"
            className={styles.input}
          />

          <datalist id="categories">
            <option value="Cosmitics" />
            <option value="Clothes" />
            <option value="Jeans" />
            <option value="T-shirts" />
          </datalist>
        </div>

        <span className="fab pa-4" onClick={setFiltersInReducer}>
          <Filtericon />
        </span>
      </div>
    </div>
  );
}

export default Filterbar;
