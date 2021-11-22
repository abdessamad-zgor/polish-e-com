import React from "react";
import styles from "../../styles/componentStyles/searchresults.module";
import { searchResultsLogic } from "../logic/searchResults.lg";
import ProductItem from "./ProductItem";

function SearchResults({ filter }) {
  let { results, isActive } = searchResultsLogic(filter);

  return (
    <div className={styles.root}>
      {isActive ? (
        <div className={styles.active}>
          {results.length > 0 ? (
            results.map((product, key) => (
              <ProductItem product={product} key={key} />
            ))
          ) : (
            <div style={{ textAlign: "center" }}>
              <h4 className="dfl-font grey pa-3">
                Nothing here by the name "{filter}"
              </h4>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SearchResults;
