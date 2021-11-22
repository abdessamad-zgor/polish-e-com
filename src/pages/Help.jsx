import React from "react";
import styles from "../styles/pageStyles/help.module";
import Appbar from "../components/common/Appbar";
import { AppbarContextProvider } from "../context";

function Help() {
  return (
    <div className={styles.root}>
      <Appbar />
    </div>
  );
}

export default Help;
