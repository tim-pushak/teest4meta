import React, { useState } from "react";
import styles from "./Load.module.css";

export function Load() {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading((prevLoading) => !prevLoading);
  };

  return (
    <button
      className={`${styles.button} ${isLoading ? styles.loading : ""}`}
      onClick={handleButtonClick}
    >
      {isLoading ? <span className={styles.spinner}></span> : "Load"}
    </button>
  );
}
