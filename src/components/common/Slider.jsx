import React from "react";
import styles from "../../styles/componentStyles/slider.module";

function Slider({ images, setImageInView, imageInView }) {
  return (
    <div className={styles.root}>
      {images.map((img) => {
        if (img == imageInView) {
          return <img className={styles.imageInView} src={img} />;
        } else {
          return (
            <img
              className={styles.slideImg}
              src={img}
              onClick={setImageInView}
            />
          );
        }
      })}
    </div>
  );
}

export default Slider;
