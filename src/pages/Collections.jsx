import React from "react";
import styles from "../styles/pageStyles/collections.module";

//import components
import Appbar from "../components/common/Appbar";
import Path from "../components/common/Path";

function Collections() {
  return (
    <div className={styles.root}>
      <Appbar />
      <Path />
      <div className={styles.container}></div>
    </div>
  );
}

export default Collections;
