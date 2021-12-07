import React from "react";
import Appbar from "../components/common/Appbar";
import styles from "../styles/pageStyles/home.module";
import Slider from "react-slick";

import TopItems from "../components/product-components/TopItems";
import Collectionbar from "../components/product-components/Collectionbar";

function Home() {
  const setting = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.home}>
      <Appbar />
      <Collectionbar />

      <section className={styles.slider}>
        <Slider {...setting}></Slider>
      </section>
      <section className={styles.topItems}>
        <h1 className="dfl-font lgh-font pa-4">TOP ITEMS</h1>
        <hr
          className="alt-font"
          style={{ width: "20%", border: " 0.1em solid rgb(255, 186, 146)" }}
        />

        <TopItems />
      </section>
    </div>
  );
}

export default Home;
