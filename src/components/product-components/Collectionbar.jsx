import React from "react";
import styles from "../../styles/componentStyles/collectionbar.module";

//import logic
import { useLogic } from "../logic/collectionbar.lg";

function Collectionbar() {
  const { RedirectToCollection } = useLogic();
  return (
    <div className={styles.root}>
      <div name="new" onClick={RedirectToCollection} className={styles.item}>
        New
      </div>
      <div
        name="classic"
        onClick={RedirectToCollection}
        className={styles.item}
      >
        Classic
      </div>
      <div name="oils" onClick={RedirectToCollection} className={styles.item}>
        Oils
      </div>
      <div
        name="hydrants"
        onClick={RedirectToCollection}
        className={styles.item}
      >
        Hydrants
      </div>
      <div
        name="essence"
        onClick={RedirectToCollection}
        className={styles.item}
      >
        Essence
      </div>
      <div
        name="natural"
        onClick={RedirectToCollection}
        className={styles.item}
      >
        Natural
      </div>
      <div name="packs" onClick={RedirectToCollection} className={styles.item}>
        Packs
      </div>
      <div name="onSale" onClick={RedirectToCollection} className={styles.item}>
        OnSale
      </div>
    </div>
  );
}

export default Collectionbar;
