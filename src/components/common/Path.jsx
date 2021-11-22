import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "../../styles/componentStyles/path.module";

function Path() {
  const location = useLocation();
  let pathname = location.pathname.split("/");
  useEffect(() => {
    pathname = location.pathname.split("/");
  }, [location]);

  return (
    <div className={styles.root}>
      {pathname.map((segment, key) => {
        if (segment == "") {
          return (
            <>
              <Link to="/" className={styles.item}>
                Home
                {" / "}
              </Link>
            </>
          );
        } else if (segment == pathname[pathname.length - 1]) {
          return (
            <>
              <Link to={pathname.join("/")} className={styles.itemLast}>
                {segment}
              </Link>
            </>
          );
        } else {
          return (
            <>
              <Link
                to={pathname.slice(0, pathname.indexOf(segment) + 1).join("/")}
                className={styles.item}
              >
                {segment}
                {" / "}
              </Link>
            </>
          );
        }
      })}
    </div>
  );
}

export default Path;
