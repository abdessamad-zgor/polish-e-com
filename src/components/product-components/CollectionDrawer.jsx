import React from "react";
import styles from "../../styles/componentStyles/collectiondrawer.module";
import { useRef, useEffect, useState } from "react";

//import logic
import { useLogic } from "../logic/collectiondrawer.lg";

function CollectionDrawer({ name }) {
  const { RedirectToCollection } = useLogic(name);
  return (
    <div className={styles.root}>
      <DrawerItem
        name="new"
        RedirectToCollection={RedirectToCollection}
        selectedName={name}
      />
      <DrawerItem
        name="classic"
        RedirectToCollection={RedirectToCollection}
        selectedName={name}
      />
      <DrawerItem
        name="oils"
        RedirectToCollection={RedirectToCollection}
        selectedName={name}
      />
      <DrawerItem
        name="hydrants"
        RedirectToCollection={RedirectToCollection}
        selectedName={name}
      />
      <DrawerItem
        name="essence"
        RedirectToCollection={RedirectToCollection}
        selectedName={name}
      />
      <DrawerItem
        name="natural"
        RedirectToCollection={RedirectToCollection}
        selectedName={name}
      />
      <DrawerItem
        name="packs"
        RedirectToCollection={RedirectToCollection}
        selectedName={name}
      />
      <DrawerItem
        name="onSale"
        RedirectToCollection={RedirectToCollection}
        selectedName={name}
      />
    </div>
  );
}

export default CollectionDrawer;

const DrawerItem = ({ name, RedirectToCollection, selectedName }) => {
  const ref = useRef();
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    console.log(ref.current.getAttribute("name") == selectedName);
    if (ref.current.getAttribute("name") == selectedName) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [ref.current, selectedName]);
  return (
    <div
      name={name}
      ref={ref}
      onClick={RedirectToCollection}
      className={isSelected ? styles.selected : styles.item}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </div>
  );
};
