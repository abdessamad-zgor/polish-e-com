import React, { useState } from "react";
import styles from "../../styles/componentStyles/appbar.module";
import { Carticon, Usericon, Searchicon, Barsicon } from "../icons";
import { Link } from "react-router-dom";
import Drawer from "../cart-components/Drawer";
import Searchbar from "./Searchbar";
import {
  useAppbar,
  CartContextProvider,
  UserContextProvider,
} from "../../context";
import DropDown from "../auth-components/DropDown";
import Modal from "../auth-components/Modal";

function Appbar() {
  const { drawers, setDrawers } = useAppbar();
  const [drawerName, setDrawerName] = useState("");
  const handleOpen = (e) => {
    setDrawerName(e.target.getAttribute("name"));

    setDrawers({
      ...drawers,
      [e.target.getAttribute("name")]: !drawers[drawerName],
    });
  };
  return (
    <div className="container relative">
      <div className={styles.appbar}>
        <div className="align-center-flex" style={{ marginRight: "auto" }}>
          <span>
            <Link to="/">
              <h1 className="display-logo lgh-font pa-5 ">Polish</h1>
            </Link>
          </span>
        </div>

        <Searchbar />

        <span className="fab-small " onClick={handleOpen} name="cart">
          <Carticon />
          {/* dropdown items // checkout  */}
        </span>

        <DropDown />

        {/* &&
          drawerName == "" navigation drawer */}

        {drawers[drawerName] && drawerName == "cart" && (
          <Drawer
            name={drawerName}
            anchor="right"
            active={drawers[drawerName]}
          />
        )}
      </div>
    </div>
  );
}

export default Appbar;
