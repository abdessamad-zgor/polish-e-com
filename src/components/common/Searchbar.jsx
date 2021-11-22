import React, { useState } from "react";
import styles from "../../styles/componentStyles/searchbar.module";
import SearchResults from "../product-components/SearchResults";
import { ProductContextProvider } from "../../context";
import { Searchicon } from "../icons";
function Searchbar() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className={styles.searchbar}>
        <div className={styles.input}>
          <input
            className={styles.inputElement}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            type="text"
          />

          <SearchResults filter={value} />
        </div>
        <div
          className="fab-small pa-5"
          onClick={(e) => {
            setValue(e.target.value);
          }}
        >
          <Searchicon />
        </div>
      </div>
    </>
  );
}

export default Searchbar;
