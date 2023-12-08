import React from "react";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchTerm}
          placeholder="What are you looking for?"
        ></input>
        <button type="submit" className={styles.searchButton}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
